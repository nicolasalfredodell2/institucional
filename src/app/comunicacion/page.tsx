import type { Metadata } from 'next';
import NoticiasList from './NoticiasList';

export const metadata: Metadata = {
  title: 'Comunicación | Tribunal de Cuentas de Río Negro',
};

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

      <NoticiasList />
    </section>
  );
}
