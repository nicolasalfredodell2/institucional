'use client';

import { useState } from 'react';
import Link from 'next/link';

type Section = 'one' | 'two' | 'three' | null;

export default function JuicioDeResponsabilidadPage() {
  const [open, setOpen] = useState<Section>(null);

  const toggle = (section: Section) =>
    setOpen((prev) => (prev === section ? null : section));

  return (
    <section className="fade-in mx-1 my-5 p-md-5 row">
      <div className="col-12">
        <div className="col-12 text-center">
          <h2 className="h4 mb-3" style={{ color: '#34373E' }}>
            Juicios de Responsabilidad
          </h2>
        </div>

        <hr />

        <div id="accordion">
          {/* Normativa Aplicable */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${open !== 'one' ? 'collapsed' : ''}`}
                  onClick={() => toggle('one')}
                  aria-expanded={open === 'one'}
                >
                  Normativa Aplicable
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'one' ? 'show' : ''}`}>
              <div className="card-body">
                <p className="mb-4 subtitle" style={{ cursor: 'pointer' }}>
                  Constitución de la Provincia de Río Negro Artículo N° 163 inciso 2
                </p>

                <p className="mb-4">ATRIBUCIONES</p>

                <p className="mb-4">
                  <strong>Artículo 163.-</strong> El Tribunal de Cuentas tiene las siguientes facultades y deberes:
                </p>

                <p className="mb-4">
                  &ldquo;... 2. ... promueve juicio de cuentas y juicio de responsabilidad a funcionarios y empleados, aún después de cesar en sus cargos y a todos sus efectos, por extralimitación o cumplimiento irregular, en la forma que establezca la ley; de resultar necesaria la promoción de investigaciones, da traslado al Fiscal de Investigaciones Administrativas.&rdquo;
                </p>

                <hr />

                <p className="mb-4 subtitle">
                  <Link href="/ley-organica">Ley Orgánica del Tribunal de Cuentas de la Provincia de Río Negro Ley K N° 2747</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Instrucciones */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${open !== 'two' ? 'collapsed' : ''}`}
                  onClick={() => toggle('two')}
                  aria-expanded={open === 'two'}
                >
                  Instrucciones
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'two' ? 'show' : ''}`}>
              <div className="card-body">
                <p className="mb-4">
                  A TENER EN CUENTA POR LA PERSONA SOMETIDA A JUICIO DE RESPONSABILIDAD PREVISTO EN LA LEY K Nº 2747
                </p>
                <p className="mb-4">
                  <strong>a)</strong> El escrito de descargo -como los sucesivos- puede presentarlo:
                </p>
                <p className="mb-4">
                  <strong>1)</strong> En formato papel con firma ológrafa en la sede de este Tribunal de Cuentas de Río Negro (calle Moreno 263 de Viedma).
                </p>
                <p className="mb-4">
                  <strong>2)</strong> De igual forma que la anterior pero enviándolo por correo postal, en cuyo caso la fecha de presentación será la impuesta en el sobre por la oficina de correos (conf. art. 56 Ley A Nº 2938 de aplicación supletoria)
                </p>
                <p className="mb-4">
                  <strong>3)</strong> Vía correo electrónico desde el domicilio electrónico al que se hace referencia en los siguientes incisos b) y c), hacia la dirección de e-mail djr@tribcuentasrionegro.gov.ar (aclaración: la segunda letra es j -jota-) (conf. art. 56 Ley A Nº 2938 de aplicación supletoria)
                </p>
                <p className="mb-4">
                  <strong>b)</strong> En su presentación o descargo (sea que fuere en soporte papel o digital) debe consignar la identificación del expediente, informar su domicilio real, constituir domicilio físico procesal en el radio urbano de la ciudad de Viedma, y constituir domicilio electrónico.
                </p>
                <p className="mb-4">
                  <strong>c)</strong> La dirección de correo electrónico que informe será tenida por el Tribunal de Cuentas de Río Negro como domicilio electrónico constituido, donde serán válidas todas las notificaciones electrónicas que allí se cursen a través de la dirección de correo electrónico djr@tribcuentasrionegro.gov.ar
                </p>
                <p className="mb-4">
                  <strong>d)</strong> Las notificaciones que se efectúen en forma electrónica desde la dirección de correo electrónico djr@tribcuentasrionegro.gov.ar producirán sus efectos procesales el día martes o viernes inmediato posterior -o el siguiente hábil si alguno de aquellos resultase feriado o inhábil-, a aquél en que la comunicación electrónica hubiere quedado disponible en el correo electrónico del destinatario de la notificación (conf. art. 65 inc. c) Ley A 2938, art. 135 bis del C.P.C.yC. y art. 8 Ac. 5/2018 STJRN, de aplicación supletoria, con las adecuaciones propias).
                </p>
                <p className="mb-4">
                  <strong>e)</strong> Sin perjuicio de lo anterior, de no constituir domicilio físico procesal en el radio urbano de la ciudad de Viedma, las providencias y resoluciones que en lo sucesivo sean emitidas, quedarán notificadas al tercer día de su dictado.
                </p>
                <p className="mb-4">
                  En caso de manifestar inconveniencia o imposibilidad de constituir domicilio físico procesal en Viedma, la Presidencia del Tribunal podrá relevarlo/a de tal obligación, siempre que haya informado y mantenga vigente el domicilio electrónico.
                </p>
                <p className="mb-4">
                  <strong>f)</strong> El apoderado que eventualmente lo/la represente debe justificar la personería con Poder otorgado ante Escribano Público o Juez de Paz.
                </p>
                <p className="mb-4">
                  <strong>g)</strong> De ofrecer pruebas, debe: 1) si es documental: acompañarla o indicar el lugar donde se encuentra; y 2) Si es testimonial: informar nombre, apellido, domicilio y DNI -si lo conociere- de los testigos que proponga y acompañar el o los pliegos de interrogatorio/s, consignando las preguntas que deberá responder el testigo sobre hechos eventualmente controvertidos. En caso de ofrecer testigos sin acompañar las preguntas sobre los hechos concretos por los cuales deban declarar, el Tribunal tendrá a la prueba por decaída.
                </p>
                <p className="mb-4">
                  <strong>h)</strong> Toda la prueba documental -incluido el Poder de representación-, debe ser enviada a la sede del Tribunal de Cuentas de Río Negro en soporte papel o por correo electrónico escaneada y en formato PDF. En caso de optar por ésta última modalidad, deben mantener a resguardo los originales, que podrán ser requeridos por el Tribunal, en cualquier momento del juicio.
                </p>
                <p className="mb-4">
                  <strong>i)</strong> En caso de no comparecer a estar a derecho ni presentar descargo en el plazo otorgado, por Resolución Interlocutoria se declarará la rebeldía, que quedará notificada al tercer día de haber sido dictada.
                </p>
                <p className="mb-4">
                  <strong>j)</strong> Las actuaciones y la documental/instrumental acompañada por la Fiscalía de Investigaciones Administrativas (parte actora) quedan a disposición del enjuiciado/a -para consulta y/o extracción de copias a su costa- en la Dirección de Juicio de Responsabilidad del Tribunal de Cuentas de Río Negro, sin necesidad de petición formal.
                  <br /> En caso de autorizar a un tercero a consultar y/o extraer copias o fotografías del expediente, debe informarlo al Tribunal, sea mediante escrito en soporte papel o por correo electrónico, consignado el nombre, apellido y DNI del autorizado.
                </p>
                <p className="mb-4">
                  <strong>k)</strong> Puede allanarse a la demanda patrimonial interpuesta por la Fiscalía de Investigaciones Administrativas, pudiendo en tal caso optar por:
                  <br /><strong>*</strong> Depositar -dentro del plazo otorgado para formular descargo- el importe que se le notifique (al que deberán adicionarse los intereses que eventualmente se devenguen hasta el día del efectivo pago) en la Cuenta Corriente Nº 90000-1694 del Tribunal de Cuentas de Río Negro abierta en el Banco Patagonia S.A., CBU 0340250600900001694009 (Convenio de Recaudación Nº 582/1), debiendo en tal caso presentar en la sede del Tribunal o enviar a la dirección de correo electrónico djr@tribcuentasrionegro.gov.ar un escrito manifestando el allanamiento a la demanda patrimonial de la FIA y adjuntar el o los comprobantes bancarios que acrediten el pago total, circunstancia que implicará la culminación del Juicio de Responsabilidad.
                  <br /><strong>*</strong> O bien aceptar el plan de pagos consignado por el Tribunal de Cuentas de Río Negro en la Resolución de inicio del Juicio, debiendo en tal caso:
                  <br /><strong>-</strong> Presentar -dentro del plazo otorgado para formular descargo- en la sede del Tribunal o enviar a la dirección de correo electrónico djr@tribcuentasrionegro.gov.ar un escrito manifestando el allanamiento a la demanda patrimonial interpuesta por la Fiscalía de Investigaciones Administrativas y aceptando el plan de pagos propuesto.
                  <br /><strong>-</strong> Depositar las cuotas del 1 al 10 de cada mes -comenzando por el mes siguiente al de la notificación de la resolución de inicio del juicio- en la Cuenta Corriente Nº 90000-1694 de este Tribunal de Cuentas abierta en el Banco Patagonia S.A., CBU 0340250600900001694009 (Convenio de Recaudación Nº 582/1).
                  <br /><strong>-</strong> Acreditar el pago de cada cuota mediante la presentación en la sede del Tribunal (calle Moreno 263 de Viedma) o enviando a la dirección de correo electrónico djr@tribcuentasrionegro.gov.ar copia del comprobante bancario que acredite cada depósito.
                  <br /> Una vez abonada la última cuota, el Tribunal practicará la liquidación de los intereses de financiación devengados y se le hará saber la forma de abonar tales intereses, que no podrá superar las tres cuotas mensuales. Una vez cancelados estos intereses, se dará por concluido el juicio de responsabilidad.
                  <br /> La tramitación del juicio de responsabilidad quedará suspendida mientras sea cumplido estrictamente el pago de las cuotas, y en caso de verificarse cualquier incumplimiento, cesará la suspensión de pleno derecho sin mediar comunicación previa alguna, y continuará el proceso hasta el dictado de la sentencia, tomándose las sumas eventualmente abonadas como pagos parciales.
                </p>
                <p className="mb-4">
                  <strong>l)</strong> El juicio tramitará de acuerdo a las normas procedimentales establecidas en la Ley K Nº 2747, siendo de aplicación supletoria las normas del Código Procesal Civil y Comercial y la Ley de Procedimientos Administrativos de Río Negro.
                </p>
              </div>
            </div>
          </div>

          {/* Consultas */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${open !== 'three' ? 'collapsed' : ''}`}
                  onClick={() => toggle('three')}
                  aria-expanded={open === 'three'}
                >
                  Consultas
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'three' ? 'show' : ''}`}>
              <div className="card-body">
                <p className="mb-4">Por e-mail a: djr@tribcuentasrionegro.gov.ar</p>
                <p className="mb-4">
                  Por mesa de entradas o por correo postal: calle Moreno 263 de Viedma, Provincia de Río Negro (Cód. Postal 8500).
                </p>
                <p className="mb-4">Por teléfono: 02920- 421500</p>
                <p className="mb-4">
                  Director de Juicio de Responsabilidad: Dr. Fernando Laborde (interno 65)
                  <br /> Subdirectora de Juicio de Responsabilidad: Dra. Flavia Marina Krieger (interno 50)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
