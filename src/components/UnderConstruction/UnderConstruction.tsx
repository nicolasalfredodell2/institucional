import styles from './UnderConstruction.module.scss';

export default function UnderConstruction() {
  return (
    <section className={`${styles.section} fade-in px-custom row`}>
      <div className="col-12 d-flex flex-column align-items-center text-center">
        <img
          src="/assets/img/trib-cuentas-escudo-con-titulo.png"
          alt="Tribunal de Cuentas de Río Negro"
          className={styles.logo}
        />

        <hr className={styles.divider} />

        <h2 className={styles.title}>Sección en Construcción</h2>

        <p className={styles.body}>
          Esta sección del sitio web se encuentra actualmente en desarrollo.
          <br />
          Próximamente estará disponible con información relevante para la ciudadanía.
          <br />
          Disculpe los inconvenientes ocasionados.
        </p>

        <p className={styles.institution}>
          Tribunal de Cuentas de la Provincia de Río Negro
        </p>
      </div>
    </section>
  );
}
