import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Misión y Objetivo | Tribunal de Cuentas de Río Negro',
};

export default function MisionYObjetivoPage() {
  return (
    <section className="fade-in mb-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h3 className="h4 mb-5" style={{ color: '#34373E' }}>
            ¿Qué hacemos?
          </h3>
        </div>
      </div>

      <div className="col-12">
        <p className="mb-4">El Tribunal de Cuentas tiene las siguientes misiones y funciones:</p>

        <p className="mb-4">1. <strong>Controla la legitimidad de lo ingresado e invertido</strong>
          {' '}en función del presupuesto por la administración centralizada y descentralizada, empresas del Estado, sociedades con participación estatal, beneficiarios de aportes provinciales, como así también los municipios que lo soliciten.
        </p>

        <p className="mb-4">2. <strong>Vigila</strong>
          {' '}el cumplimiento de las disposiciones legales y procedimientos administrativos; <strong>inspecciona</strong> las oficinas públicas que administran fondos, tomando las medidas necesarias para prevenir irregularidades; <strong>promueve juicio de cuentas y juicio de responsabilidad</strong> a funcionarios y empleados, aún después de cesar en sus cargos y a todos sus efectos, por extralimitación o cumplimiento irregular, en la forma que establezca la ley; de resultar necesaria la promoción de investigaciones, da traslado al Fiscal de Investigaciones Administrativas.
        </p>

        <p className="mb-4">3. <strong>Dictamina</strong>
          {' '}sobre las cuentas de inversión del presupuesto que el Poder Ejecutivo presenta a la Legislatura para su aprobación.
        </p>

        <p className="mb-4">4. <strong>Provee a la designación</strong>
          {' '}de los órganos de fiscalización interna y externa de las empresas, sociedades, entidades crediticias, entes y organismos autárquicos del Estado.
        </p>

        <p className="mb-4">5. <strong>Informa anualmente a la Legislatura sobre los resultados del control</strong>
          {' '}que realiza y emite opinión sobre los procedimientos administrativos en uso, sin perjuicio de los informes que puede elevar en cualquier momento por graves incumplimientos o irregularidades.
        </p>

        <p className="mb-4">6. <strong>Elabora y eleva su proyecto de presupuesto anual; designa y remueve su personal.</strong>
        </p>
      </div>
    </section>
  );
}
