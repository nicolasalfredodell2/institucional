'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';

const API_BASE = 'https://ddjj-backend02-testing.tribcuentasrionegro.gov.ar/api/';

export default function ConfirmacionCorreoPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const agentId = params?.agent_id as string;
  const id = searchParams?.get('id') ?? '';
  const token = searchParams?.get('token') ?? '';

  const [isLoading, setIsLoading] = useState(true);
  const [emailValidated, setEmailValidated] = useState(false);
  const [pemURL, setPemURL] = useState<string | null>(null);
  const [msgError, setMsgError] = useState('');

  useEffect(() => {
    const url = `${API_BASE}agents/${agentId}/verify?id=${id}&token=${token}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) return res.json().then((err) => Promise.reject(err));
        return res.json();
      })
      .then((data) => {
        setEmailValidated(true);
        if (data.pem_url) setPemURL(data.pem_url);
        setTimeout(() => setIsLoading(false), 7000);
      })
      .catch((err) => {
        setEmailValidated(false);
        let msg = 'Ocurrio un problema. No pudimos verificar su correo.';
        if (err?.message) msg = err.message;
        if (err?.error) msg = err.error;
        if (err?.message?.includes?.('Link already used')) setEmailValidated(true);
        setMsgError(msg);
        setTimeout(() => setIsLoading(false), 7000);
      });
  }, [agentId, id, token]);

  return (
    <section className="fade-in my-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h3 className="h4 mb-5" style={{ color: '#34373E' }}>
            Confirmación de Dirección de Correo Electrónico
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {isLoading && (
              <div className="fade-in alert alert-info text-center">
                <p><strong>Verificando su Correo Electrónico</strong></p>
                <hr />
                <p className="mb-0">
                  Estamos procesando su solicitud de verificación. Por favor, espere un momento.
                  <br />
                  Esta página se actualizará automáticamente con el resultado.
                </p>
              </div>
            )}

            {!isLoading && emailValidated && (
              <div className="alert alert-success fade-in" role="alert">
                <p><strong>Su correo electrónico ha sido verificado con éxito</strong></p>
                <hr />
                <p className="mb-0">Muchas gracias</p>
              </div>
            )}

            {!isLoading && emailValidated && pemURL && (
              <div className="alert alert-light fade-in" role="alert">
                <p>
                  <strong>Por favor, descargue la clave de la Declaración Jurada haciendo clic en el botón de abajo.</strong>
                </p>
                <p>La misma le servirá para poder visualizar su Declaracion Jurada más adelante.</p>
                <button
                  onClick={() => window.open(pemURL, '_blank')}
                  className="btn btn-primary bg-primary"
                >
                  Descargar clave
                </button>
              </div>
            )}

            {!isLoading && !emailValidated && (
              <div className="alert alert-danger fade-in" role="alert">
                <p>{msgError}</p>
              </div>
            )}

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
