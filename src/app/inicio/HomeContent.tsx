'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HOME_API_URL, EMPTY_HOME_DATA, resolveLinkUrl, type ApiHomeData, type ApiHomeResponse } from '@/lib/home';
import styles from './page.module.scss';

const links = [
  { title: 'Red Federal de Control Público', url: 'https://www.redfederal.gob.ar/' },
  { title: 'Sindicatura General de la Nación', url: 'https://www.argentina.gob.ar/sigen' },
  { title: 'Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Públicos de Control Externo de la República Argentina', url: 'https://tribunalesdecuentas.org.ar/' },
  { title: 'Auditoría General de la Nación', url: 'https://www.agn.gob.ar/' },
  { title: 'Defensoría del Pueblo de Río Negro', url: 'https://defensoriarionegro.gov.ar/' },
  { title: 'Fiscalía de Investigaciones', url: 'http://fia.rionegro.gov.ar/' },
];

export default function HomeContent() {
  const [home, setHome] = useState<ApiHomeData>(EMPTY_HOME_DATA);

  useEffect(() => {
    fetch(HOME_API_URL)
      .then((res) => res.json())
      .then((json: ApiHomeResponse) => setHome(json.data ?? EMPTY_HOME_DATA))
      .catch(() => setHome(EMPTY_HOME_DATA));
  }, []);

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

          {home.agendaEfemerides.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4 mb-2 mb-md-0 p-md-4">
              <div className={`card row ${styles.calendarCard}`}>
                <div className="col-2 p-0">
                  <h5 className={`${styles.cardHeader} rounded-0 text-white`}>
                    <strong>
                      {item.day}
                      {item.day && <br />}
                      {item.month}
                    </strong>
                  </h5>
                </div>

                <div className="col-2 p-0">
                  <img src={item.image ?? ''} alt="Imagen día importante" className={styles.imgDateImportant} />
                </div>

                <div className="col-8 m-auto px-lg-2">
                  <div className="row">
                    <div className="col-12 text-center">
                      <small className="card-title font-weight-light">{item.summary}</small>
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
          {home.quickAccessCards.map((card, i) => {
            const inner = (
              <div
                className={`align-items-center card d-flex justify-content-center rounded text-white ${styles.bgCard}`}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className={styles.bgOpacityCard} />
                <div style={{ zIndex: 1 }}>
                  <h5 className="h5 mb-0">{card.label}</h5>
                  <small>
                    Más información&nbsp;
                    <small>
                      <i className="fa-solid fa-angles-right" />
                    </small>
                  </small>
                </div>
              </div>
            );

            const href = resolveLinkUrl(card.url);

            return (
              <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
                {href ? (
                  <Link href={href} style={{ textDecoration: 'none' }}>
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
              {home.cifrasInstitucionales.map((item, i) => (
                <div
                  key={i}
                  className={`col-12 col-md-3 py-2 ${i < home.cifrasInstitucionales.length - 1 ? styles.divH6Data : ''}`}
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
