import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Constitución de Río Negro | Tribunal de Cuentas de Río Negro',
};

export default function ConstitucionPage() {
  return (
    <section className="fade-in my-5 px-custom row legal-page">
      <div className="col-12 text-center">
        <div className="col-12">
          <h3 className="h4 mb-5" style={{ color: '#34373E' }}>CONSTITUCIÓN DE RÍO NEGRO</h3>
        </div>
      </div>

      <div className="col-12">
        <p className="subtitle"><strong>ORGANOS DE CONTROL EXTERNO</strong></p>
        <p className="subtitle"><strong>TRIBUNAL DE CUENTAS - INTEGRACION</strong></p>

        <p className="mb-5"><strong>Artículo 161.-</strong> El Tribunal de Cuentas es órgano de contralor externo con autonomía funcional e integrado por tres miembros.</p>

        <p className="subtitle"><strong>REQUISITOS</strong></p>
        <p className="mb-4"><strong>Artículo 162.-</strong> Para ser miembro del Tribunal de Cuentas se requieren iguales exigencias que para ser legislador y, además, título de abogado o graduado en ciencias económicas, debiendo acreditar diez años de ejercicio de la profesión.</p>

        <p className="subtitle"><strong>ATRIBUCIONES</strong></p>
        <p><strong>Artículo 163.-</strong> El Tribunal de Cuentas tiene las siguientes facultades y deberes:</p>
        <p className="mb-4"><strong>1.</strong> Controla la legitimidad de lo ingresado e invertido en función del presupuesto por la administración centralizada y descentralizada, empresas del Estado, sociedades con participación estatal, beneficiarios de aportes provinciales, como así también los municipios que lo soliciten.</p>
        <p className="mb-4"><strong>2.</strong> Vigila el cumplimiento de las disposiciones legales y procedimientos administrativos; inspecciona las oficinas públicas que administran fondos, tomando las medidas necesarias para prevenir irregularidades; promueve juicio de cuentas y juicio de responsabilidad a funcionarios y empleados, aún después de cesar en sus cargos y a todos sus efectos, por extralimitación o cumplimiento irregular, en la forma que establezca la ley; de resultar necesaria la promoción de investigaciones, da traslado al Fiscal de Investigaciones Administrativas.</p>
        <p className="mb-4"><strong>3.</strong> Dictamina sobre las cuentas de inversión del presupuesto que el Poder Ejecutivo presenta a la Legislatura para su aprobación.</p>
        <p className="mb-4"><strong>4.</strong> Provee a la designación de los órganos de fiscalización interna y externa de las empresas, sociedades, entidades crediticias, entes y organismos autárquicos del Estado.</p>
        <p className="mb-4"><strong>5.</strong> Informa anualmente a la Legislatura sobre los resultados del control que realiza y emite opinión sobre los procedimientos administrativos en uso, sin perjuicio de los informes que puede elevar en cualquier momento por graves incumplimientos o irregularidades.</p>
        <p className="mb-4"><strong>6.</strong> Elabora y eleva su proyecto de presupuesto anual; designa y remueve su personal.</p>

        <p className="subtitle"><strong>DISPOSICIONES COMUNES</strong></p>
        <p className="mb-4"><strong>Artículo 166.-</strong> Los miembros del Tribunal de Cuentas y el Fiscal de Investigaciones Administrativas son designados por la Legislatura a propuesta del Poder Ejecutivo. Duran seis años en las funciones y pueden ser redesignados. Se remueven por las causales y procedimientos del juicio político.</p>

        <p className="subtitle"><strong>REGLAMENTACION</strong></p>
        <p className="mb-4"><strong>Artículo 169.-</strong> La ley establece la organización, funciones, competencia, procedimientos y situación institucional del Tribunal de Cuentas, Fiscalía de Investigaciones Administrativas y Defensor del Pueblo.</p>
      </div>
    </section>
  );
}
