'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const redirect = (path: string) => {
    router.push(path);
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.container}>
      <Link
        className={`align-items-end d-flex fade-in-down ${styles.navbarBrand} pointer p-2`}
        href="/inicio"
        style={{ zIndex: 9999999 }}
      >
        <img
          src="/assets/img/trib-cuentas-escudo.jpg"
          alt="Logo Tribunal de Cuentas de Rio Negro"
          className={styles.imgLogo}
        />
      </Link>

      <div className="row">
        <nav className={`col-12 col-xl-11 d-none d-lg-flex fade-in justify-content-end navbar navbar-expand-lg position-absolute ${styles.nav}`}>
          <ul className="navbar-nav py-5">
            <li className={`dropdown d-none d-lg-flex nav-item ${styles.dropdown}`}>
              <p><a className="nav-link pointer">Institucional <i className="fa-solid fa-sort-down"></i></a></p>
              <ul className={styles.dropdownContent}>
                <li onClick={() => redirect('/autoridades')}><p className="m-0 mb-1"><small>Autoridades</small></p></li>
                <li onClick={() => redirect('/organigrama')}><p className="m-0 mb-1"><small>Organización</small></p></li>
                <li onClick={() => redirect('/historia')}><p className="m-0"><small>Historia</small></p></li>
              </ul>
            </li>

            <li className={`align-items-center d-none d-lg-flex dropdown nav-item ${styles.dropdown}`}>
              <p><a className="nav-link pointer">Normativa <i className="fa-solid fa-sort-down"></i></a></p>
              <ul className={styles.dropdownContent}>
                <li onClick={() => redirect('/constitucion')}><p className="m-0 mb-1"><small>Constitución de Río Negro</small></p></li>
                <li onClick={() => redirect('/ley-organica')}><p className="m-0 mb-1"><small>Ley orgánica</small></p></li>
                <li onClick={() => redirect('/reglamento-organico')}><p className="m-0 mb-1"><small>Reglamento orgánico funcional</small></p></li>
                <li onClick={() => redirect('/reglamento-rendiciones-de-cuentas')}><p className="m-0 mb-1"><small>Reglamento de rendiciones de cuentas</small></p></li>
                <li onClick={() => redirect('/instructivos-para-sindicaturas-de-empresas-publicas')}><p className="m-0 mb-1"><small>Instructivos para sindicaturas de empresas públicas</small></p></li>
              </ul>
            </li>

            <li className="align-items-center d-none d-lg-flex nav-item">
              <p><Link className="nav-link" href="/memorias">Memorias</Link></p>
            </li>

            <li className={`dropdown d-none d-lg-flex nav-item ${styles.dropdown}`}>
              <p><a className="nav-link pointer">Procesos <i className="fa-solid fa-sort-down"></i></a></p>
              <ul className={styles.dropdownContent}>
                <li onClick={() => redirect('/rendiciones-de-cuentas')}><p className="m-0 mb-1"><small>Rendiciones de Cuentas</small></p></li>
                <li onClick={() => redirect('/juicio-de-responsabilidad')}><p className="m-0 mb-1"><small>Juicio de Responsabilidad</small></p></li>
                <li onClick={() => redirect('/declaraciones-juradas')}><p className="m-0"><small>Declaraciones Juradas</small></p></li>
              </ul>
            </li>

            <li className="align-items-center d-none d-lg-flex nav-item">
              <p><Link className="nav-link" href="/ubicacion">Contacto</Link></p>
            </li>

            <li className="align-items-center d-none d-lg-flex nav-item">
              <p>
                <a className="nav-link" href="https://intranet.tribcuentasrionegro.gov.ar/institucional" target="_blank" rel="noopener noreferrer">
                  Iniciar sesion
                </a>
              </p>
            </li>
          </ul>
        </nav>
      </div>

      <img
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`d-block d-lg-none fade-in ${styles.iconSidebar} pointer position-fixed`}
        src={!isSidebarOpen ? '/assets/img/navbar/menuopen.png' : '/assets/img/navbar/menuclose.webp'}
        alt="Icono abrir menu lateral"
      />

      {isSidebarOpen && (
        <div className={`fade-in-left position-fixed ${styles.sidebar}`} style={{ zIndex: 999999999 }}>
          <div>
            <p className="my-0 pointer py-0" onClick={() => redirect('/inicio')}>Inicio</p>
            <hr />
            <p className="my-0 pointer py-0">Institucional</p>
            <p className="mb-0 pointer" onClick={() => redirect('/autoridades')} style={{ marginLeft: '25px' }}>Autoridades</p>
            <p className="mb-0 pointer" onClick={() => redirect('/organigrama')} style={{ marginLeft: '25px' }}>Organización</p>
            <p className="mb-0 pointer" onClick={() => redirect('/historia')} style={{ marginLeft: '25px' }}>Historia</p>
            <hr />
            <p className="my-0 pointer py-0">Normativa</p>
            <p className="mb-0 pointer" onClick={() => redirect('/constitucion')} style={{ marginLeft: '25px' }}>Constitución de Río Negro</p>
            <p className="mb-0 pointer" onClick={() => redirect('/ley-organica')} style={{ marginLeft: '25px' }}>Ley Orgánica</p>
            <p className="mb-0 pointer" onClick={() => redirect('/reglamento-organico')} style={{ marginLeft: '25px' }}>Reglamento Orgánico Funcional</p>
            <p className="mb-0 pointer" onClick={() => redirect('/reglamento-rendiciones-de-cuentas')} style={{ marginLeft: '25px' }}>Reglamento de Rendiciones de Cuentas</p>
            <p className="mb-0 pointer" onClick={() => redirect('/instructivos-para-sindicaturas-de-empresas-publicas')} style={{ marginLeft: '25px' }}>Instructivos para Sindicaturas de Empresas Públicas</p>
            <hr />
            <p className="my-0 pointer py-0" onClick={() => redirect('/memorias')}>Memorias</p>
            <hr />
            <p className="my-0 pointer py-0">Procesos</p>
            <p className="mb-0 pointer" onClick={() => redirect('/rendiciones-de-cuentas')} style={{ marginLeft: '25px' }}>Rendiciones de Cuentas</p>
            <p className="mb-0 pointer" onClick={() => redirect('/juicio-de-responsabilidad')} style={{ marginLeft: '25px' }}>Juicio de Responsabilidad</p>
            <p className="mb-0 pointer" onClick={() => redirect('/declaraciones-juradas')} style={{ marginLeft: '25px' }}>Declaraciones Juradas</p>
            <hr />
            <p className="my-0 pointer py-0" onClick={() => redirect('/ubicacion')}>Contacto</p>
            <hr />
            <p className="my-0 pointer py-0">
              <a className="m-0 nav-link p-0" href="https://intranet.tribcuentasrionegro.gov.ar/institucional" target="_blank" rel="noopener noreferrer">
                Iniciar sesión
              </a>
            </p>
            <hr />
            <p className="my-0 pointer py-0" onClick={() => setIsSidebarOpen(false)}><strong>Cerrar</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}
