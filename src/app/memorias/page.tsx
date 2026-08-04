import type { Metadata } from 'next';
import MemoriesList from './MemoriesList';

export const metadata: Metadata = {
  title: 'Memorias de Gestión | Tribunal de Cuentas de Río Negro',
};

export default function MemoriasPage() {
  return (
    <section className="fade-in my-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h2 className="h4 mb-5" style={{ color: '#34373E' }}>
            MEMORIAS DE GESTIÓN
          </h2>
        </div>
      </div>

      <div className="col-12">
        <p className="mb-5" style={{ textAlign: 'justify' }}>
          El Tribunal de Cuentas debe informar anualmente a la Legislatura sobre los resultados del control
          que realiza (art. 163 inc. 5 de la Constitución Provincial y art. 11º inc. i) de la Ley K 2747
          Orgánica del Tribunal de Cuentas). Para dar cumplimiento a dicho mandato constitucional el Tribunal
          de Cuentas elabora y presenta a la Legislatura la Memoria del año anterior donde consta un detalle
          pormenorizado de sus actuaciones. Dicha Memoria es analizada y aprobada por la Legislatura previo
          análisis de la Comisión Especial designada al efecto.
        </p>

        <div className="row">
          <div className="col-12">
            <MemoriesList />
          </div>
        </div>
      </div>
    </section>
  );
}
