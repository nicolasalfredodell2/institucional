import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Inicio | Tribunal de Cuentas de Río Negro',
};

const cards = [
  { bg: '/assets/img/home/card-5.jpg', title: '¿Qué hacemos?', url: '/mision-y-objetivo' },
  { bg: '/assets/img/home/card-6.jpg', title: 'Autoridades', url: '/autoridades' },
  { bg: '/assets/img/home/card-4.jpeg', title: 'Normativa', url: '/normativa' },
  { bg: '/assets/img/home/card-3.jpg', title: 'Rendiciones de Cuentas', url: '/rendiciones-de-cuentas' },
  { bg: '/assets/img/home/card-1.jpg', title: 'Juicio de Responsabilidad', url: '/juicio-de-responsabilidad', changePosition: true },
  { bg: '/assets/img/home/card-2.jpg', title: 'Declaraciones Juradas', url: '/declaraciones-juradas' },
];

const datesCalendar = [
  { bg: '/assets/img/calendar/30nuevo.jpg', dateDay: '', dateMonth: 'FEB', description: 'Conmemoración del 30° Aniversario' },
  { bg: '/assets/img/calendar/memoria.jpg', dateDay: '', dateMonth: 'MAR', description: 'Elaboración de la Memoria Anual' },
  { bg: '/assets/img/calendar/reunion.jpg', dateDay: '', dateMonth: 'ABR', description: 'I Reunión Secretariado Permanente de Tribunales de Cuentas' },
];

const itemsCifras = [
  { title: '1994', description: 'Año de creación del Tribunal de Cuentas de Río Negro' },
  { title: '21', description: 'Expedientes resueltos con decisorio firme' },
  { title: '830', description: 'Notificaciones electrónicas' },
  { title: '241', description: 'Providencias' },
];

const links = [
  { title: 'Red Federal de Control Público', url: 'https://www.redfederal.gob.ar/' },
  { title: 'Sindicatura General de la Nación', url: 'https://www.argentina.gob.ar/sigen' },
  { title: 'Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Públicos de Control Externo de la República Argentina', url: 'https://tribunalesdecuentas.org.ar/' },
  { title: 'Auditoría General de la Nación', url: 'https://www.agn.gob.ar/' },
  { title: 'Defensoría del Pueblo de Río Negro', url: 'https://defensoriarionegro.gov.ar/' },
  { title: 'Fiscalía de Investigaciones', url: 'http://fia.rionegro.gov.ar/' },
];

export default function InicioPage() {
  return (
    <div className="fade-in row">
      {/* Botón ver noticias */}
      <section className={`col-12 mb-5 text-center ${styles.sectionNews}`}>
        <Link href="/comunicacion">
          <button className={`btn btn-lg text-white rounded-pill ${styles.roundedPill}`}>
            Ver todas las noticias
          </button>
        </Link>
      </section>

      {/* Próximamente */}
      <section className="col-12 my-5 text-center">
        <div className="row">
          <div className="col-12">
            <h4 className="h4 mb-3" style={{ color: '#34373E' }}>
              PRÓXIMAMENTE
            </h4>
          </div>
        </div>

        <div
          className={`align-items-center d-flex mb-3 px-custom row ${styles.bgParallaxNexts}`}
          style={{ backgroundImage: 'url(/assets/img/home/prox.jpg)' }}
        >
          <div className={styles.bgOpacity} />

          {datesCalendar.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4 mb-2 mb-md-0 p-md-4">
              <div className={`card row ${styles.calendarCard}`}>
                <div className="col-2 p-0">
                  <h5 className={`${styles.cardHeader} rounded-0 text-white`}>
                    <strong>
                      {item.dateDay}
                      {item.dateDay && <br />}
                      {item.dateMonth}
                    </strong>
                  </h5>
                </div>

                <div className="col-2 p-0">
                  <img src={item.bg} alt="Imagen día importante" className={styles.imgDateImportant} />
                </div>

                <div className="col-8 m-auto px-lg-2">
                  <div className="row">
                    <div className="col-12 text-center">
                      <small className="card-title font-weight-light">{item.description}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <button className={`btn btn-lg text-white rounded-pill ${styles.roundedPill}`}>
              Ver calendario
            </button>
          </div>
        </div>
      </section>

      {/* Tarjetas de acceso rápido */}
      <section className="col-12 mt-5 px-custom-2">
        <div className="row">
          {cards.map((card, i) => {
            const inner = (
              <div
                className={[
                  'align-items-center card d-flex justify-content-center rounded text-white',
                  styles.bgCard,
                  card.changePosition ? styles.bgCardPositionTop : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ backgroundImage: `url(${card.bg})` }}
              >
                <div className={styles.bgOpacityCard} />
                <div style={{ zIndex: 1 }}>
                  <h5 className="h5 mb-0">{card.title}</h5>
                  <small>
                    Más información&nbsp;
                    <small>
                      <i className="fa-solid fa-angles-right" />
                    </small>
                  </small>
                </div>
              </div>
            );

            return (
              <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
                {card.url ? (
                  <Link href={card.url} style={{ textDecoration: 'none' }}>
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Hechos y cifras */}
      <section className="col-12 mt-5 pt-5 px-custom">
        <div className="row text-center">
          <div className="col-12">
            <h4 className="h4 mb-3" style={{ color: '#34373E' }}>
              HECHOS Y CIFRAS
            </h4>
          </div>

          <div className="col-12">
            <div className="my-5 row">
              {itemsCifras.map((item, i) => (
                <div
                  key={i}
                  className={`col-12 col-md-3 py-2 ${i < itemsCifras.length - 1 ? styles.divH6Data : ''}`}
                >
                  <h6 className={`h6 ${styles.h6Data}`}>{item.title}</h6>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Barra de links con scroll automático */}
      <section className={`bg-danger col-12 mt-5 ${styles.scrollingContainer}`}>
        <div className={`row ${styles.scrollingContent}`}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="align-items-center border col-12 col-md-4 col-xl-2 d-flex justify-content-center p-3 text-center"
              style={{ backgroundColor: '#657187', textDecoration: 'none' }}
            >
              <span className={`${styles.interestingLink} text-white`}>
                {link.title.toUpperCase()}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
