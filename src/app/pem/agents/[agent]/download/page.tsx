'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';

export default function PemDownloadPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const agent = params?.agent as string;
  const id = searchParams?.get('id') ?? '';
  const token = searchParams?.get('token') ?? '';
  const formId = searchParams?.get('form_id') ?? '';

  const downloadPEM = () => {
    window.open(
      `https://ddjj-backend02-testing.tribcuentasrionegro.gov.ar/api/agents/${agent}/pem?id=${id}&token=${token}&agent=${agent}&form_id=${formId}`
    );
  };

  return (
    <section className="fade-in my-5 px-custom row">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert" role="alert">
              <p>
                <strong>Por favor, descargue la clave de la Declaración Jurada haciendo clic en el botón de abajo.</strong>
              </p>
              <p>La misma le servirá para poder visualizar su Declaracion Jurada más adelante.</p>
              <button onClick={downloadPEM} className="btn btn-primary bg-primary">
                Descargar clave
              </button>
            </div>

            <div className="mt-5">
              <button onClick={() => router.push('/inicio')} className="btn">
                Seguir navegando
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
