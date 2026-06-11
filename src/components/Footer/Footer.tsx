import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className={`row ${styles.footer}`}>
      <div className="col-12 pt-5">
        <div className="d-flex justify-content-end px-custom-2 pb-md-4 row">
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center row">
              <div className="col-12">
                <img src="/assets/img/trib-cuentas-escudo-con-titulo.png" alt="Logo con escudo" height={65} width={250} />
              </div>
              <div className="col-12 my-4 text-center">
                <a href="https://x.com/tcrionegro" target="_blank" rel="noopener noreferrer" className="text-muted">
                  <i className="fa-brands fa-x-twitter fa-xl" style={{ marginRight: '10px' }}></i>
                </a>
                <a href="https://www.linkedin.com/company/tribunal-de-cuentas-rio-negro/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-muted">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-2 mt-4 mt-md-0">
            <p><strong className={styles.subtitleFooter}>INSTITUCIONAL</strong></p>
            <Link href="/autoridades"><p className="mb-1">Autoridades</p></Link>
            <Link href="/organigrama"><p className="mb-1">Organización</p></Link>
            <Link href="/historia"><p>Historia</p></Link>
          </div>

          <div className="col-12 col-md-3 col-lg-2 mt-4 mt-md-0">
            <p><strong className={styles.subtitleFooter}>NORMATIVA</strong></p>
            <Link href="/constitucion"><p className="mb-1">Constitución de Río Negro</p></Link>
            <Link href="/ley-organica"><p className="mb-1">Ley Orgánica</p></Link>
            <Link href="/reglamento-organico"><p className="mb-1">Reglamento Orgánico Funcional</p></Link>
            <Link href="/reglamento-rendiciones-de-cuentas"><p className="mb-1">Reglamento de Rendiciones de Cuenta</p></Link>
            <Link href="/instructivos-para-sindicaturas-de-empresas-publicas"><p>Instructivos para Sindicaturas de Empresas Públicas</p></Link>
          </div>

          <div className="col-12 col-md-2 col-lg-1 mt-4 mt-md-0">
            <p><strong className={styles.subtitleFooter}>MEMORIA</strong></p>
            <Link href="/memorias"><p>Memoria</p></Link>
          </div>

          <div className="col-12 col-md-2 col-lg-2 mt-4 mt-md-0 px-lg-5">
            <p><strong className={styles.subtitleFooter}>PROCESOS</strong></p>
            <Link href="/rendiciones-de-cuentas"><p className="mb-1">Rendiciones de Cuentas</p></Link>
            <Link href="/cambiar"><p className="mb-1">Juicio de Responsabilidad</p></Link>
            <Link href="/declaraciones-juradas"><p>Declaraciones Juradas</p></Link>
          </div>

          <div className="col-12 col-md-2 col-lg-1 mt-4 mt-md-0">
            <p><strong className={styles.subtitleFooter}>CONTACTO</strong></p>
            <Link href="/ubicacion"><p>Contacto</p></Link>
          </div>
        </div>

        <div className="border-top d-flex justify-content-between pb-3 pb-lg-0 pt-3 px-custom row">
          <div className="col-12 col-lg-4">
            <p><small><small><strong>© {anio} TCRN</strong> Todos los derechos reservados</small></small></p>
          </div>
          <div className="col-12 col-lg-4 text-lg-center">
            <p><small><small>Argentina, Río Negro. Viedma (8500), Moreno 263</small></small></p>
          </div>
          <div className="col-12 col-lg-4 text-lg-end">
            <p className="m-0"><small><small>(02920) 421500/421421</small></small></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
