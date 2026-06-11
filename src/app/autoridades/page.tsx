import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Autoridades | Tribunal de Cuentas de Río Negro',
};

const authorities = [
  { img: '/assets/img/authorities/vocal3-new-ia.jpeg', job: 'Presidente', name: 'Dr. Julio Fernando Ortiz' },
  { img: '/assets/img/authorities/vocal2.jpg', job: 'Vicepresidente Primero', name: 'Cr. Maximiliano Felipe Suarez', isGordini: false },
  { img: '/assets/img/authorities/vocal1.jpeg', job: 'Vicepresidente Segundo', name: 'Dra. Natalia Falugi', isGordini: true },
];

export default function AutoridadesPage() {
  return (
    <section className="fade-in mt-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h3 className="h4 mb-5" style={{ color: '#34373E' }}>AUTORIDADES</h3>
        </div>
      </div>

      <div className="col-12">
        <p style={{ textAlign: 'justify' }}>
          De acuerdo con lo establecido en la Ley Orgánica del Tribunal de Cuentas de la Provincia de Río Negro N.º 2747, las autoridades del organismo son designadas anualmente por el propio cuerpo, mediante decisión adoptada en sesión plenaria entre sus miembros.
        </p>
        <p style={{ textAlign: 'justify' }}>
          En cumplimiento de esta normativa, durante el Plenario N.º 05 celebrado el 9 de diciembre de 2025, el Tribunal de Cuentas resolvió por unanimidad la designación de sus autoridades para el período 2026. El Dr. Julio Fernando Ortiz ejercerá la Presidencia entre el 1 de enero y el 31 de diciembre de 2026. El Cr. Maximiliano Felipe Suárez fue designado Vicepresidente Primero y la Dra. Natalia Falugi, Vicepresidente Segunda.
        </p>
        <p className="mb-5" style={{ textAlign: 'justify' }}>
          En ese mismo acto se dispuso la distribución de las áreas de supervisión entre los vocales, conforme al Reglamento Interno del organismo, como parte del funcionamiento institucional regular del Tribunal.
        </p>

        <div className="d-flex justify-content-center my-5 py-1 row">
          {authorities.map((auth, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="d-flex justify-content-center row">
                <div className="col-12 order-0 text-center">
                  <img
                    src={auth.img}
                    alt={auth.name}
                    className={`${styles.authImg} ${auth.isGordini ? styles.coverImage : ''}`}
                  />
                </div>
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center mt-3 mx-5 text-center">
                  <p className="mb-0 subtitle"><strong>{auth.job}</strong></p>
                  <p><small>{auth.name}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center my-5 py-5 row">
          <div className="col-12">
            <p className="subtitle"><strong>Secretaría Privada: Vilma Heredia - María Marta Montiel - Juan Pablo Mazza</strong></p>
            <hr />
            <p>Tel: 02920 – 421421</p>
            <p>Int. 6004 Fax: 02920 – 421500</p>
          </div>
        </div>
      </div>
    </section>
  );
}
