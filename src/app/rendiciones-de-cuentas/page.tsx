'use client';

import { useState, useMemo, useEffect } from 'react';
import { bulletinsUrl, type ApiBulletin, type ApiBulletinsResponse } from '@/lib/accountability';
import styles from './page.module.scss';

const MONTHS = [
  { name: 'Enero', value: 1 }, { name: 'Febrero', value: 2 }, { name: 'Marzo', value: 3 },
  { name: 'Abril', value: 4 }, { name: 'Mayo', value: 5 }, { name: 'Junio', value: 6 },
  { name: 'Julio', value: 7 }, { name: 'Agosto', value: 8 }, { name: 'Septiembre', value: 9 },
  { name: 'Octubre', value: 10 }, { name: 'Noviembre', value: 11 }, { name: 'Diciembre', value: 12 },
];

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth() + 1;
const YEARS = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i);

const ITEMS_PER_PAGE = 10;

export default function RendicionesdeCuentasPage() {
  const [titleFilter, setTitleFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState(String(CURRENT_MONTH));
  const [yearFilter, setYearFilter] = useState(String(CURRENT_YEAR));
  const [currentPage, setCurrentPage] = useState(1);

  const [bulletins, setBulletins] = useState<ApiBulletin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    fetch(bulletinsUrl({ year: yearFilter ? Number(yearFilter) : undefined, month: monthFilter ? Number(monthFilter) : undefined }))
      .then((res) => res.json())
      .then((json: ApiBulletinsResponse) => setBulletins(json.data ?? []))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [yearFilter, monthFilter]);

  const filtered = useMemo(() => {
    return bulletins.filter((b) => {
      if (numberFilter !== '' && !String(b.number).toLowerCase().includes(numberFilter.toLowerCase())) return false;
      if (titleFilter !== '' && !b.title.toLowerCase().includes(titleFilter.toLowerCase())) return false;
      return true;
    });
  }, [bulletins, titleFilter, numberFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handleChange =
    (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value);
      setCurrentPage(1);
    };

  const selectPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="fade-in mt-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h2 className="h4 mb-5" style={{ color: '#34373E' }}>
            RENDICIONES DE CUENTAS
          </h2>
        </div>
      </div>

      <div className="col-12 mb-5">
        <p style={{ textAlign: 'justify' }}>
          Síntesis de Fallos digitalizados del Tribunal de Cuentas de la Provincia de Río Negro.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Las mismas cumplimentan el procedimiento dispuesto en Circular N° 2 y N° 3 emitidas por la Dirección de Despacho y Boletín Oficial de la provincia de Río Negro.
        </p>

        <div className="mb-3 mt-5 row">
          <div className="col-12 col-md-5 mb-2">
            <input
              className="form-control"
              placeholder="Buscar por título"
              type="text"
              value={titleFilter}
              onChange={handleChange(setTitleFilter)}
            />
          </div>
          <div className="col-12 col-md-3 mb-2">
            <input
              className="form-control"
              placeholder="Buscar por número"
              type="number"
              value={numberFilter}
              onChange={handleChange(setNumberFilter)}
            />
          </div>
          <div className="col-12 col-md-2 mb-2">
            <select
              className="form-select"
              value={monthFilter}
              onChange={handleChange(setMonthFilter)}
            >
              <option value="">Buscar por mes</option>
              {MONTHS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-2 mb-2">
            <select
              className="form-select"
              value={yearFilter}
              onChange={handleChange(setYearFilter)}
            >
              <option value="">Todos los años</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {isLoading && <p className="text-center my-4">Cargando boletines...</p>}

            {!isLoading && hasError && (
              <p className="text-center my-4">No se pudieron cargar los boletines.</p>
            )}

            {!isLoading && !hasError && paginated.length === 0 && (
              <p className="text-center my-4">No hay boletines para el filtro seleccionado.</p>
            )}

            {!isLoading && !hasError && paginated.length > 0 && (
              <ul className={`${styles.bulletinList} list-group`}>
                {paginated.map((b, i) => (
                  <li
                    key={i}
                    className="d-flex fade-in justify-content-between list-group-item"
                    style={{ cursor: 'pointer' }}
                    onClick={() => window.open(b.link, '_blank')}
                  >
                    <strong>{b.title}</strong>
                    <i className="fa-regular fa-file-pdf" style={{ marginTop: '5px' }} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {totalPages > 1 && (
            <div className="col-12 d-flex justify-content-center mt-2">
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${safePage === 1 ? 'disabled' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <a className="page-link" onClick={() => selectPage(safePage - 1)}>
                      <strong>&lt;</strong>
                    </a>
                  </li>
                  {pages
                    .filter((p) => p === safePage - 1 || p === safePage || p === safePage + 1)
                    .map((p) => (
                      <li
                        key={p}
                        className={`page-item ${p === safePage ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <a className="page-link" onClick={() => selectPage(p)}>
                          {p}
                        </a>
                      </li>
                    ))}
                  <li
                    className={`page-item ${safePage === totalPages ? 'disabled' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <a className="page-link" onClick={() => selectPage(safePage + 1)}>
                      <strong>&gt;</strong>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
