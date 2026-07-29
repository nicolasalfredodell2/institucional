'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { NEWS_API_URL, formatDate, type ApiNewsItem, type ApiNewsDetailResponse } from '@/lib/news';
import styles from './page.module.scss';

function NoteText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function NoticiaPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [notice, setNotice] = useState<ApiNewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [zoomedImg, setZoomedImg] = useState<{ url: string } | null>(null);

  useEffect(() => {
    fetch(`${NEWS_API_URL}/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Noticia no encontrada');
        return res.json();
      })
      .then((json: ApiNewsDetailResponse) => setNotice(json.data))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [slug]);

  if (isLoading) {
    return (
      <section className="d-flex fade-in justify-content-center my-3 px-custom row">
        <div className="col-12 text-center">
          <p>Cargando noticia...</p>
        </div>
      </section>
    );
  }

  if (hasError || !notice) {
    return (
      <section className="d-flex fade-in justify-content-center my-3 px-custom row">
        <div className="col-12">
          <p>Noticia no encontrada.</p>
          <button className={styles.btnBack} onClick={() => router.push('/comunicacion')}>
            Volver a las noticias
          </button>
        </div>
      </section>
    );
  }

  const hasGallery = notice.gallery && notice.gallery.length > 0;

  return (
    <>
      <section className="d-flex fade-in justify-content-center my-3 px-custom row">
        <div className="col-12">
          <h4 className="h2">
            <strong>{notice.title}</strong>
          </h4>

          <p style={{ fontSize: '20px' }}>{formatDate(notice.dateISO)}</p>

          <div className="d-flex justify-content-center my-3 row">
            <div className="col-12">
              <img
                alt={notice.title}
                className={[styles.imgNotice, notice.grayscale ? styles.blackAndWhite : ''].filter(Boolean).join(' ')}
                src={notice.coverImage}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="text-justify">
            {notice.body.map((paragraph, i) => (
              <p key={i} className={`mb-4 ${styles.noticeText}`}>
                <NoteText text={paragraph} />
              </p>
            ))}
          </div>

          {hasGallery && (
            <div className="my-5 row">
              {notice.gallery.map((img, i) => (
                <div key={i} className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3">
                  <img
                    alt={notice.title}
                    onClick={() => setZoomedImg(img)}
                    className={styles.maxHeight}
                    src={img.url}
                  />
                  {img.description && (
                    <p className={`${styles.imgDescription} p-1`}>
                      <small>
                        <small>{img.description}</small>
                      </small>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          <button className={`${styles.btnBack} btn-sm my-3`} onClick={() => router.push('/comunicacion')}>
            Volver a las noticias
          </button>
        </div>
      </section>

      {zoomedImg && (
        <div className={styles.contentZoom} onClick={() => setZoomedImg(null)}>
          <img src={zoomedImg.url} alt="Imagen ampliada" className={styles.imgZoom} />
          <i className={`${styles.buttonClose} fa-regular fa-circle-xmark fa-2xl text-white`} />
        </div>
      )}
    </>
  );
}
