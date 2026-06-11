import type { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Ubicación y Contacto | Tribunal de Cuentas de Río Negro',
};

export default function UbicacionPage() {
  return (
    <section className="fade-in my-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h2 className="h4 mb-5" style={{ color: '#34373E' }}>
            UBICACIÓN Y CONTACTO
          </h2>
        </div>
      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <p className="subtitle"><strong>Nos encontramos en:</strong></p>
            <p>Moreno 263</p>
            <p>C.P: (8500)</p>
            <p className="mb-5">Viedma, Río Negro, Argentina</p>

            <p className="subtitle"><strong>Podés contactarte con nosotros vía:</strong></p>
            <p className="mb-4">Teléfono: (02920) 421500 / 421421</p>
            <p className="mb-4">Fax: (02920) 421500</p>
            <p className="mb-4">jpmazza@tribcuentasrionegro.gov.ar</p>
            <p className="mb-4">vheredia@tribcuentasrionegro.gov.ar</p>
            <p className="mb-4">mmontiel@tribcuentasrionegro.gov.ar</p>
          </div>

          <div className="col-12 mt-4">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Viedma,%20moreno%20263&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className={styles.map}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
