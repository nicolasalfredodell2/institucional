import type { Metadata } from 'next';
import Link from 'next/link';
import { NOTICES } from '@/data/notices';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Comunicación | Tribunal de Cuentas de Río Negro',
};

const listingNotices = [...NOTICES].filter((n) => Number(n.id) >= 5).reverse();

export default function ComunicacionPage() {
  return (
    <section className="d-flex fade-in justify-content-center my-3 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h2 className="h4 mb-5" style={{ color: '#34373E' }}>
            COMUNICACIÓN
          </h2>
        </div>
      </div>

      <section className="row">
        {listingNotices.map((notice) => (
          <Link
            key={notice.id}
            href={`/noticia/${notice.id}`}
            className={`${styles.cardContainer} col-12 col-md-6 col-lg-4 col-xl-3 mb-4`}
            style={{ textDecoration: 'none' }}
          >
            <img
              src={notice.image}
              alt="Imagen de noticia"
              className={[
                styles.cardImg,
                notice.imgCover ? styles.cardImgCover : '',
                notice.isWithFilterWhiteAndBlack ? styles.blackAndWhite : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />

            <div className={`${styles.card} card p-3`}>
              <small className="text-muted">
                <small>{notice.date}</small>
              </small>

              <small className="my-2" style={{ fontWeight: 500, color: '#34373E' }}>
                <strong>{notice.title}</strong>
              </small>

              <small className="font-weight-light">{notice.notes[0]}</small>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}
