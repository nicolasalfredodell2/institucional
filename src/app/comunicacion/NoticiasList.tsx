'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

const API_URL = 'http://192.168.200.242:8090/api/v1/news';
const PER_PAGE = 12;

interface ApiNewsItem {
  id: string;
  slug: string;
  title: string;
  dateISO: string;
  summary: string;
  body: string[];
  coverImage: string;
  coverImageActive: boolean;
  grayscale: boolean;
  listedInComunicaciones: boolean;
}

interface ApiNewsResponse {
  data: ApiNewsItem[];
  meta: {
    next_cursor: string | null;
  };
}

function formatDate(dateISO: string) {
  const [year, month, day] = dateISO.split('-');
  return `${day}/${month}/${year}`;
}

async function fetchNews(cursor: string | null): Promise<ApiNewsResponse> {
  const url = new URL(API_URL);
  url.searchParams.set('per_page', String(PER_PAGE));
  if (cursor) url.searchParams.set('cursor', cursor);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('No se pudieron cargar las noticias');
  return res.json();
}

export default function NoticiasList() {
  const [notices, setNotices] = useState<ApiNewsItem[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchNews(null)
      .then((json) => {
        setNotices(json.data.filter((n) => n.listedInComunicaciones));
        setNextCursor(json.meta.next_cursor);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    fetchNews(nextCursor)
      .then((json) => {
        setNotices((prev) => [...prev, ...json.data.filter((n) => n.listedInComunicaciones)]);
        setNextCursor(json.meta.next_cursor);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoadingMore(false));
  };

  if (isLoading) {
    return (
      <div className="col-12 text-center my-5">
        <p>Cargando noticias...</p>
      </div>
    );
  }

  if (hasError && notices.length === 0) {
    return (
      <div className="col-12 text-center my-5">
        <p>No se pudieron cargar las noticias.</p>
      </div>
    );
  }

  return (
    <>
      <section className="row">
        {notices.map((notice) => (
          <Link
            key={notice.id}
            href={`/noticia/${notice.id}`}
            className={`${styles.cardContainer} col-12 col-md-6 col-lg-4 col-xl-3 mb-4`}
            style={{ textDecoration: 'none' }}
          >
            <img
              src={notice.coverImage}
              alt="Imagen de noticia"
              className={[styles.cardImg, styles.cardImgCover, notice.grayscale ? styles.blackAndWhite : '']
                .filter(Boolean)
                .join(' ')}
            />

            <div className={`${styles.card} card p-3`}>
              <small className="text-muted">
                <small>{formatDate(notice.dateISO)}</small>
              </small>

              <small className="my-2" style={{ fontWeight: 500, color: '#34373E' }}>
                <strong>{notice.title}</strong>
              </small>

              <small className="font-weight-light">{notice.summary}</small>
            </div>
          </Link>
        ))}
      </section>

      {nextCursor && (
        <div className="col-12 text-center my-4">
          <button className={styles.btnLoadMore} onClick={handleLoadMore} disabled={isLoadingMore}>
            {isLoadingMore ? 'Cargando...' : 'Cargar más noticias'}
          </button>
        </div>
      )}
    </>
  );
}
