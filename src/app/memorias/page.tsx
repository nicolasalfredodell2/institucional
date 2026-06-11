import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memorias de Gestión | Tribunal de Cuentas de Río Negro',
};

const MEMORIES = [
  { name: 'Memoria 2025', path: '/assets/memories/2025.pdf' },
  { name: 'Memoria 2024', path: '/assets/memories/2024.pdf' },
  { name: 'Memoria 2023', path: '/assets/memories/2023.pdf' },
  { name: 'Memoria 2022', path: '/assets/memories/2022.pdf' },
  { name: 'Memoria 2021', path: '/assets/memories/2021.pdf' },
  { name: 'Memoria 2020', path: '/assets/memories/2020.pdf' },
  { name: 'Memoria 2019', path: '/assets/memories/2019.pdf' },
  { name: 'Memoria 2018', path: '/assets/memories/2018.pdf' },
  { name: 'Memoria 2017', path: '/assets/memories/2017.pdf' },
  { name: 'Memoria 2016', path: '/assets/memories/2016.pdf' },
  { name: 'Memoria 2015', path: '/assets/memories/2015.pdf' },
  { name: 'Memoria 2014', path: '/assets/memories/2014.pdf' },
  { name: 'Memoria 2013', path: '/assets/memories/2013.pdf' },
  { name: 'Memoria 2012', path: '/assets/memories/2012.pdf' },
];

export default function MemoriasPage() {
  return (
    <section className="fade-in my-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h2 className="h4 mb-5" style={{ color: '#34373E' }}>
            MEMORIAS DE GESTIÓN
          </h2>
        </div>
      </div>

      <div className="col-12">
        <p className="mb-5" style={{ textAlign: 'justify' }}>
          El Tribunal de Cuentas debe informar anualmente a la Legislatura sobre los resultados del control
          que realiza (art. 163 inc. 5 de la Constitución Provincial y art. 11º inc. i) de la Ley K 2747
          Orgánica del Tribunal de Cuentas). Para dar cumplimiento a dicho mandato constitucional el Tribunal
          de Cuentas elabora y presenta a la Legislatura la Memoria del año anterior donde consta un detalle
          pormenorizado de sus actuaciones. Dicha Memoria es analizada y aprobada por la Legislatura previo
          análisis de la Comisión Especial designada al efecto.
        </p>

        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              {MEMORIES.map((memory) => (
                <a
                  key={memory.name}
                  href={memory.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-between list-group-item list-group-item-action pointer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <strong>{memory.name}</strong>
                  <i className="fa-regular fa-file-pdf" style={{ marginTop: '5px' }} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
