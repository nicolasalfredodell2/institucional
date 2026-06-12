'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { NOTICES } from '@/data/notices';
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
  const id = params?.id as string;
  const [zoomedImg, setZoomedImg] = useState<{ url: string } | null>(null);

  const notice = NOTICES.find((n) => String(n.id) === String(id));

  if (!notice) {
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

  const hasGallery = notice.imgs && notice.imgs.length > 0;

  return (
    <>
      <section className="d-flex fade-in justify-content-center my-3 px-custom row">
        <div className="col-12">
          <h4 className="h2">
            <strong>{notice.title}</strong>
          </h4>

          <p style={{ fontSize: '20px' }}>{notice.date}</p>

          <div className="d-flex justify-content-center my-3 row">
            <div className="col-12">
              <img
                alt={notice.title}
                className={[
                  styles.imgNotice,
                  notice.isWithFilterWhiteAndBlack ? styles.blackAndWhite : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                src={notice.image}
                style={{ objectFit: notice.imgCover ? 'cover' : undefined }}
              />
            </div>
          </div>

          <div className="text-justify">
            {notice.notes.map((note, i) => (
              <p key={i} className={`mb-4 ${styles.noticeText}`}>
                <NoteText text={note} />
              </p>
            ))}
          </div>

          {hasGallery && (
            <div className="my-5 row">
              {notice.imgs!.map((img, i) => (
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
