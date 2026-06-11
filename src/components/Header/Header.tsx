'use client';

import { useRef, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.scss';

interface NewsItem {
  date: string;
  description: string;
  id: string | number;
  img: string;
  title: string;
  isWithFilterWhiteAndBlack?: boolean;
}

const NEWS: NewsItem[] = [
  { date: 'Viernes 5 de Junio del 2026', description: 'Los vocales del Tribunal de Cuentas de Río Negro, Maximiliano Suárez y Natalia Falugi, participaron en Catamarca de la Segunda Reunión Anual del Secretariado Permanente de Tribunales de Cuentas de la República Argentina y de la Tercera Reunión de la Asociación de Entidades Oficiales de Control Público del Mercosur (ASUR), en representación de la provincia.', id: '74', img: 'assets/img/comunication/comunication71.jpeg', title: 'Representantes de Río Negro participaron de la reunión nacional del Secretariado Permanente de Tribunales de Cuenta' },
  { date: 'Miercoles 3 de Junio del 2026', description: 'El Tribunal de Cuentas de la Provincia de Río Negro remitió a la Legislatura Provincial la Memoria Institucional correspondiente al ejercicio 2025, documento que reúne las principales acciones, actividades y resultados desarrollados por el organismo durante el último año.', id: '73', img: 'assets/img/comunication/comunication70.webp', title: 'El Tribunal de Cuentas elevó a la Legislatura la Memoria Institucional 2025' },
  { date: 'Lunes 11 de Mayo del 2026', description: 'El Tribunal de Cuentas de Río Negro llevó adelante tareas de control vinculadas al seguimiento de vacunas remitidas por el Estado Nacional, en el marco del Plan Anual de Auditorías Especiales que desarrolla el organismo.', id: 72, img: 'assets/img/comunication/comunication69.jpg', title: 'El Tribunal de Cuentas verifica el uso de vacunas y programas nacionales en la provincia' },
  { date: 'Lunes 27 de Abril del 2026', description: 'El Tribunal de Cuentas de la Provincia de Río Negro llevó adelante auditorías en las empresas públicas Alta Tecnología Sociedad Anónima Unipersonal (ALTEC S.A.U.) y Empresa Forestal Rionegrina Sociedad Anónima (EMFORSA), ambas con sede en la ciudad de San Carlos de Bariloche.', id: 71, img: 'assets/img/comunication/comunication68.png', title: 'Auditorías en empresas públicas de Río Negro' },
  { date: 'Jueves 16 de Abril del 2026', description: 'El Tribunal de Cuentas de la Provincia de Río Negro participa de la I Reunión Anual 2026 del Secretariado Permanente de Tribunales de Cuentas de la República Argentina, que se desarrolla los días 15, 16 y 17 de abril en la sede de la Sindicatura General de la Nación (SIGEN), en la Ciudad Autónoma de Buenos Aires.', id: 70, img: 'assets/img/comunication/comunication67.png', title: 'Río Negro presente en el encuentro federal de organismos de control público' },
  { date: 'Lunes 16 de Marzo del 2026', description: 'El Tribunal de Cuentas de la Provincia de Río Negro suscribió un convenio con el Registro Nacional de las Personas (RENAPER) que permitirá incorporar a los sistemas institucionales los servicios del Sistema de Identidad Digital (SID) para la validación de identidad de personas.', id: '69', img: 'assets/img/comunication/comunication66.png', title: 'El Tribunal de Cuentas firmó un convenio con RENAPER para incorporar servicios de validación de identidad digital' },
  { date: 'Jueves 12 de Marzo del 2026', description: 'En el marco de la Planificación Anual de Auditorías, el área de Auditorías Especiales del Tribunal de Cuentas de la Provincia de Río Negro se encuentra realizando tareas de control en las ciudades de Río Colorado y General Roca, vinculadas al Programa Nacional de Agregado de Valor para Cooperativas Agroindustriales (CoopAR).', id: '68', img: 'assets/img/comunication/comunication65.png', title: 'Control del Tribunal de Cuentas sobre proyectos del programa CoopAR en la provincia' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const widgetsContentRef = useRef<HTMLDivElement>(null);

  const isShowHeaderNotices = pathname.includes('/inicio') || pathname === '/';
  const headerHeight = isShowHeaderNotices ? 645 : 445;

  const [pathBackground, setPathBackground] = useState<string>('');
  const [hasAddCenter, setHasAddCenter] = useState(false);

  useEffect(() => {
    const n = Math.floor(Math.random() * 5) + 1;
    setPathBackground(`/assets/img/header/${n}.jpg`);
    setHasAddCenter(n !== 1 && n !== 6);
  }, []);

  const scrollRight = () => {
    widgetsContentRef.current?.scrollTo({ left: widgetsContentRef.current.scrollLeft + 325, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    widgetsContentRef.current?.scrollTo({ left: widgetsContentRef.current.scrollLeft - 325, behavior: 'smooth' });
  };

  const showNotice = (notice: NewsItem) => {
    router.push(`/noticia/${notice.id}`);
  };

  return (
    <header
      className={`pt-5 row ${styles.header}`}
      style={{
        backgroundImage: `url(${pathBackground})`,
        backgroundPosition: hasAddCenter ? 'center' : undefined,
        height: `${headerHeight}px`,
      }}
    >
      <div className="col-12 px-custom pt-5" style={{ zIndex: 9999 }}>
        <div className="align-items-between d-flex justify-content-center pt-5 row h-100">
          <div className="col-12 pt-4 text-white">
            <p className="mb-0">TRIBUNAL DE CUENTAS</p>
            <p>RÍO NEGRO</p>
          </div>

          {isShowHeaderNotices && (
            <div className="fade-in">
              <div className="col-12 d-flex justify-content-center justify-content-md-end mb-2 mb-md-0" style={{ marginTop: '122px' }}>
                <a href="https://x.com/tcrionegro" target="_blank" rel="noopener noreferrer" className="text-light">
                  <i className="fa-brands fa-x-twitter fa-xl" style={{ marginRight: '10px' }}></i>
                </a>
                <a href="https://www.linkedin.com/company/tribunal-de-cuentas-rio-negro/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-light">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </div>

              <h4 className="h4 text-white text-center">ÚLTIMAS NOTICIAS</h4>

              <div ref={widgetsContentRef} className="col-12 justify-content-center" style={{ overflow: 'hidden' }}>
                <div className={styles.btnLeft}>
                  <i className="fa-solid fa-circle-left fa-2xl pointer text-muted" onClick={scrollLeft}></i>
                </div>
                <div className={styles.btnRight}>
                  <i className="fa-solid fa-circle-right fa-2xl pointer text-muted" onClick={scrollRight}></i>
                </div>

                <div className={`px-2 row ${styles.contentNews}`}>
                  {NEWS.map((item) => (
                    <div key={item.id} className={styles.new}>
                      <img
                        src={`/${item.img}`}
                        onClick={() => showNotice(item)}
                        className={`${styles.imgNew} pointer w-100 ${item.isWithFilterWhiteAndBlack ? styles.blackAndWhite : ''}`}
                        alt="Imagen de noticia"
                      />
                      <div className={`${styles.card} pointer p-3`} onClick={() => showNotice(item)}>
                        <small className="text-muted">
                          <small>{item.date}</small>
                        </small>
                        <small className="my-2" style={{ fontWeight: 500, color: '#34373E' }}>
                          <strong>{item.title}</strong>
                        </small>
                        <small className="font-weight-light mb-2">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={styles.divOpacity}
        style={{ height: `${headerHeight}px` }}
      />
    </header>
  );
}
