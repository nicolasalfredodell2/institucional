import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Normativa | Tribunal de Cuentas de Río Negro',
};

const items = [
  { title: 'Constitución de Río Negro', url: '/constitucion' },
  { title: 'Ley orgánica', url: '/ley-organica' },
  { title: 'Reglamento Orgánico Funcional', url: '/reglamento-organico' },
  { title: 'Reglamento de Rendiciones de Cuenta', url: '/reglamento-rendiciones-de-cuentas' },
  { title: 'Instructivos para Sindicaturas de Empresas Públicas', url: '/instructivos-para-sindicaturas-de-empresas-publicas' },
];

export default function NormativaPage() {
  return (
    <section className="d-flex fade-in justify-content-center my-3 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h3 className="h4 mb-5" style={{ color: '#34373E' }}>
            NORMATIVA
          </h3>
        </div>
      </div>

      <article className="mb-5">
        <ul className="list-group">
          {items.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`${styles.listItem} d-flex justify-content-between list-group-item`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span>
                <strong>{item.title}</strong>
              </span>
              <i className="fa-solid fa-angles-right" style={{ marginTop: '5px' }} />
            </Link>
          ))}
        </ul>
      </article>
    </section>
  );
}
