'use client';

import { useState } from 'react';
import styles from './page.module.scss';

type Section = 'one' | 'two' | 'three' | 'four' | 'five' | null;

const subAnexos = [
  { name: 'SUBANEXO I -ART 6 -INGRESO ELECTIVO', path: '/assets/subAnexos/ingresoElectivo.odt' },
  { name: 'SUBANEXO II-ART 6 -INGRESO NO ELECTIVO', path: '/assets/subAnexos/IngresoNoElectivo.odt' },
  { name: 'SUBANEXO III-ART 12 -INFORME PATRIMONIAL', path: '/assets/subAnexos/informePatrimonial.odt' },
  { name: 'SUB ANEXO IV-ART 14 -EGRESO', path: '/assets/subAnexos/egreso.odt' },
  { name: 'ANEXO RESERVADO ART 10', path: '/assets/subAnexos/art10.odt' },
];

const models = [
  { name: 'MODELO DE SOBRE de DDJJ de INGRESO AL CARGO', path: '/assets/models/ingresoAlCargo.pdf' },
  { name: 'MODELO DE SOBRE de INFORME PATRIMONIAL', path: '/assets/models/informePatrimonial.pdf' },
  { name: 'MODELO DE SOBRE de DDJJ de CESE DEL CARGO', path: '/assets/models/ceseDelCargo.pdf' },
  { name: 'SOBRE ANEXO RESERVADO ART 10', path: '/assets/models/art10.pdf' },
];

const aplicateNormatives = [
  { name: 'Ley Provincial L N° 3550', path: '/assets/aplicateNormative/ley3550.pdf' },
  { name: 'Decreto Provincial L N° 255/2003', path: '/assets/aplicateNormative/decreto255-2003.pdf' },
  { name: 'Resolución "T" N° 54/2013 del Tribunal de Cuentas de la Provincia de Río Negro', path: '/assets/aplicateNormative/resolucion54.pdf' },
  { name: 'Resolución "T" N° 55/2013 del Tribunal de Cuentas de la Provincia de Río Negro', path: '/assets/aplicateNormative/resolucion55.pdf' },
  { name: 'Resolución "T" N° 39/2020 del Tribunal de Cuentas de la Provincia de Río Negro', path: '/assets/aplicateNormative/resolucion39.pdf' },
];

export default function DeclaracionesJuradasPage() {
  const [open, setOpen] = useState<Section>(null);

  const toggle = (section: Section) =>
    setOpen((prev) => (prev === section ? null : section));

  return (
    <section className="fade-in my-5 px-custom row">
      <div className="col-12 text-center">
        <h3 className="h4 mb-3" style={{ color: '#34373E' }}>
          DECLARACIONES JURADAS DE BIENES E INGRESOS LEY L Nº 3550
        </h3>
      </div>

      <div className="col-12 my-5">
        <div id="accordion">
          {/* FORMULARIOS DDJJ */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${styles.accordionBtn} ${open !== 'one' ? 'collapsed' : ''}`}
                  onClick={() => toggle('one')}
                  aria-expanded={open === 'one'}
                >
                  <strong>FORMULARIOS DDJJ</strong>
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'one' ? 'show' : ''}`}>
              <div className="card-body">
                <ul className="list-group" style={{ cursor: 'pointer' }}>
                  {subAnexos.map((item) => (
                    <li
                      key={item.name}
                      className="list-group-item"
                      onClick={() => window.open(item.path)}
                    >
                      <p className="m-0">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MODELOS DE SOBRES DDJJ */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${styles.accordionBtn} ${open !== 'two' ? 'collapsed' : ''}`}
                  onClick={() => toggle('two')}
                  aria-expanded={open === 'two'}
                >
                  <strong>MODELOS DE SOBRES DDJJ</strong>
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'two' ? 'show' : ''}`}>
              <div className="card-body">
                <ul className="list-group" style={{ cursor: 'pointer' }}>
                  {models.map((item) => (
                    <li
                      key={item.name}
                      className="list-group-item"
                      onClick={() => window.open(item.path)}
                    >
                      <p className="m-0">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* NORMATIVA APLICABLE */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${styles.accordionBtn} ${open !== 'three' ? 'collapsed' : ''}`}
                  onClick={() => toggle('three')}
                  aria-expanded={open === 'three'}
                >
                  <strong>NORMATIVA APLICABLE</strong>
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'three' ? 'show' : ''}`}>
              <div className="card-body">
                <p className="mb-4">
                  El régimen de presentación de Declaraciones Juradas de Bienes e Ingresos para los sujetos obligados se halla regulado por las normas constitucionales, legales y reglamentarias que se consignan a continuación, las cuales pueden ser descargadas para su consulta:
                </p>

                <p className="mb-1 title">Convención Interamericana contra la Corrupción Artículo III</p>
                <p className="mb-4">
                  <strong>1)</strong> Artículo III apartado 4 de la Convención Interamericana contra la Corrupción, sancionada en el marco de la Organización de los Estados Americanos (OEA), celebrada en Caracas, Venezuela, el 29/3/1996, ratificada por Ley 24759.
                  <br /> &ldquo;…Medidas preventivas…los Estados Partes convienen en considerar la aplicabilidad de medidas, dentro de sus propios sistemas institucionales, destinadas a crear, mantener y fortalecer…. Sistemas para la declaración de los ingresos, activos y pasivos por parte de las personas que desempeñan funciones públicas en los cargos que establezca la ley y para la publicación de tales declaraciones cuando corresponda…&rdquo;
                </p>

                <p className="mb-1 title">Constitución Nacional Artículo N° 36</p>
                <p className="mb-4">
                  <strong>2)</strong> Artículo 36 de la Constitución Nacional.
                  <br /> &ldquo;…El Congreso sancionará una ley sobre ética pública para el ejercicio de la función…&rdquo;
                </p>

                <p className="mb-1 title">Constitución de la Provincia de Río Negro Artículo N° 5</p>
                <p className="mb-4">
                  <strong>3)</strong> Artículo 5 de la Constitución de la Provincia de Río Negro.
                  <br /> &ldquo;...Los magistrados y funcionarios, electivos o no…están obligadas a manifestar sus bienes al ingreso, bajo apercibimiento de no recibir emolumento y de cesar en el cargo; y al egreso, de negarle beneficio previsional. La manifestación de bienes comprende también la del cónyuge y personas a su cargo, conforme la reglamentación...&rdquo;.
                </p>

                <ul className="list-group" style={{ cursor: 'pointer' }}>
                  {aplicateNormatives.map((item) => (
                    <li
                      key={item.name}
                      className="list-group-item"
                      onClick={() => window.open(item.path)}
                    >
                      <p className="m-0">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* INSTRUCCIONES */}
          <div className="card">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${styles.accordionBtn} ${open !== 'four' ? 'collapsed' : ''}`}
                  onClick={() => toggle('four')}
                  aria-expanded={open === 'four'}
                >
                  <strong>INSTRUCCIONES</strong>
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'four' ? 'show' : ''}`}>
              <div className="card-body">
                <p className="mb-4">
                  <strong>*</strong> El sobre conteniendo en su interior la DJ debe ser presentado en el Tribunal de Cuentas de Río Negro (calle Moreno 263 de Viedma) sano y debidamente cerrado.
                  <br /><strong>*</strong> La carátula que se pega en la parte exterior del sobre debe tener el formato diagramado por el Tribunal de Cuentas de Río Negro.
                  <br /><strong>*</strong> La carátula debe encontrarse con todos su campos completos y estar firmada por el/la declarante, de manera ológrafa.
                  <br /><strong>*</strong> Al sobre de DJ debe abrocharse en su exterior, copia del Decreto, Resolución y/o Acta de designación y/o de cese en el cargo y/o función, según corresponda.
                  <br /><strong>*</strong> En caso de presentar sobre conteniendo &ldquo;Anexo Reservado art. 10&rdquo;, éste debe abrocharse al formulario de declaración jurada, y ambos introducirse al sobre principal.
                  <br /><strong>*</strong> A todo sobre de DJ de egreso, debe adjuntarse en su exterior, además, una copia del comprobante que acredite haber presentado previamente la DJ de ingreso y la fecha en que tal presentación se produjo.
                  <br /><strong>*</strong> En caso que la carátula del sobre de DJ contenga campos en blanco y/o ausencia de firma del declarante y/o carencia de la documental requerida (copia del instrumento de designación o cese y del recibo de DJ de ingreso, abrochados en la parte exterior del sobre), la Mesa de Entradas y Salidas de este Tribunal de Cuentas de Río Negro no permitirá su recepción hasta tanto las omisiones o falencias sean subsanadas.
                  <br /><strong>*</strong> Envío por correo postal: En caso que el declarante envíe por correo postal su DJ, deberá confeccionarla siguiendo los pasos detallados anteriormente. Luego de ello, deberá introducirlo en otro sobre, cuya carátula debe decir.
                </p>
                <p className="mb-4">
                  <strong>REMITENTE:</strong>
                  <br /> Nombre y apellido:
                  <br /> Domicilio:
                  <br /> Localidad:
                </p>
                <p className="mb-4">
                  <strong>DESTINARIO:</strong> Tribunal de Cuentas de Río Negro
                  <br /> SECRETARIO AUDITOR CONTABLE
                  <br /> Área Declaraciones Juradas Patrimoniales
                  <br /> Moreno 263 VIEDMA -PROVINCIA DE RIO NEGRO
                  <br /> Código Postal 8500
                </p>
                <p>
                  * Los mismos requisitos detallados precedentemente deberán ser cumplidos en los casos que los sobres sean enviados a través de los bolsines de los distintos organismos.
                </p>
              </div>
            </div>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className="card">
            <div className="card-header" id="headingFive">
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${styles.accordionBtn} ${open !== 'five' ? 'collapsed' : ''}`}
                  onClick={() => toggle('five')}
                  aria-expanded={open === 'five'}
                >
                  <strong>PREGUNTAS FRECUENTES - CONSULTAS</strong>
                </button>
              </h5>
            </div>
            <div className={`collapse ${open === 'five' ? 'show' : ''}`}>
              <div className="card-body">
                <p className="mb-4">
                  <strong>¿CUÁNDO LOS SUJETOS COMPRENDIDOS EN EL ART. 7 DE LA LEY L Nº 3550 DEBEN PRESENTAR DECLARACIÓN JURADA DE BIENES E INGRESOS?</strong>
                  <br /> CUANDO INGRESAN: Dentro de los treinta (30) días de haber asumido un cargo o función pública.
                  <br /> Anualmente, siempre que se haya producido una variación relevante en el patrimonio del declarante y/o de su cónyuge o conviviente y/o de sus hijos menores o mayores a cargo. En tal caso, debe presentarse un Informe Patrimonial Anual que reviste el carácter de Declaración Jurada.
                  <br /> CUANDO EGRESAN: Dentro de los diez (10) días de haber cesado en el cargo o función pública.
                </p>
                <p className="mb-4">
                  <strong>¿QUÉ DATOS DEBE CONTENER LA DECLARACIÓN JURADA DE BIENES E INGRESOS?</strong>
                  <br /> Debe contener una nómina detallada de todos los bienes propios del declarante, propios de su cónyuge, los que integren la sociedad conyugal, los del conviviente, los que integren en su caso la sociedad de hecho y los de sus hijos menores y mayores a cargo, en el país o en el extranjero.
                  <br /> Para ello, el Formulario de Declaración Jurada de Bienes e Ingresos se deberá confeccionar de tal manera que de la misma se pueda obtener una relación precisa y circunstanciada del patrimonio del declarante y del grupo familiar que integra, a la fecha en que se asume el cargo o función pública y a la fecha en que se produce la cesación.
                </p>
                <p className="mb-4">
                  <strong>¿QUÉ DOCUMENTACIÓN DEBE PRESENTARSE?</strong>
                  <br /> El sujeto obligado debe completar, suscribir y presentar el FORMULARIO de Declaración Jurada de Bienes e Ingresos que corresponda, que deberá introducir en un sobre, sea por haber asumido un cargo o función pública (Modelo Sobre Ingreso que puede ser lectivo o no electivo), cesado en el mismo (modelo sobre cese), o por existir variaciones relevantes en su patrimonio y/o en el de su grupo familiar (Modelo Sobre Informe Patrimonial)
                  <br /> Además, si el declarante, su cónyuge, su conviviente y/o sus hijos menores y/o mayores a cargo, poseen, en el país o en el extranjero, depósitos en distintas monedas, títulos, bonos o similares, debe completar, suscribir y presentar un &ldquo;ANEXO RESERVADO art. 10 inc. d) de la Ley L Nº 3550&rdquo;, donde conste el nombre de los Bancos o entidades financieras, los números de las cuentas corrientes, cuentas comitentes, cajas de ahorro, cajas de seguridad y tarjetas de créditos con sus extensiones.
                  <br /> Tal sobre tamaño media carta debe introducirse dentro del sobre papel madera tamaño A4.
                </p>
                <p className="mb-4">
                  <strong>¿DÓNDE SE ENCUENTRAN DISPONIBLES LOS FORMULARIOS y LOS MODELOS DE CARÁTULA DE LOS SOBRES?</strong>
                  <br /> En la página web:
                  <br /> www.tribcuentas.rionegro.gov.ar, en el link &ldquo;Declaraciones Juradas&rdquo;.
                </p>
                <p className="mb-4">
                  <strong>¿DÓNDE DEBEN SER PRESENTADAS LAS DECLARACIONES JURADAS DE BIENES E INGRESOS?</strong>
                  <br /> En el Tribunal de Cuentas de la Provincia de Río Negro, sito en calle Moreno 263 de la ciudad de Viedma, Provincia de Río Negro (Código Postal 8.500).
                </p>
                <p className="mb-4">
                  <strong>CONSULTAS</strong>
                </p>
                <p className="mb-4">
                  <strong>E-MAIL PARA CONSULTAS:</strong>
                  <br /> ddjj@tribcuentasrionegro.gov.ar
                  <br /> Luis Pablo Vaisberg
                  <br /> Lic. Gabriela Rodríguez
                </p>
                <p className="mb-4">
                  <strong>Teléfono</strong> 02920-421500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
