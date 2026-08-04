'use client';

import { useRef, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { formatLongDate, type ApiNewsItem } from '@/lib/news';
import { HOME_API_URL, type ApiHomeResponse } from '@/lib/home';
import styles from './Header.module.scss';

interface NewsItem {
  date: string;
  description: string;
  slug: string;
  img: string;
  title: string;
  isWithFilterWhiteAndBlack?: boolean;
}

function mapApiNews(item: ApiNewsItem): NewsItem {
  return {
    date: formatLongDate(item.dateISO),
    description: item.summary,
    slug: item.slug,
    img: item.coverImage,
    title: item.title,
    isWithFilterWhiteAndBlack: item.grayscale,
  };
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const widgetsContentRef = useRef<HTMLDivElement>(null);

  const isShowHeaderNotices = pathname.includes('/inicio') || pathname === '/';
  const headerHeight = isShowHeaderNotices ? 645 : 445;

  const [pathBackground, setPathBackground] = useState<string>('');
  const [hasAddCenter, setHasAddCenter] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const n = Math.floor(Math.random() * 5) + 1;
    setPathBackground(`/assets/img/header/${n}.jpg`);
    setHasAddCenter(n !== 1 && n !== 6);
  }, []);

  useEffect(() => {
    fetch(HOME_API_URL)
      .then((res) => res.json())
      .then((json: ApiHomeResponse) => setNews((json.data?.news ?? []).map(mapApiNews)))
      .catch(() => setNews([]));
  }, []);

  const scrollRight = () => {
    widgetsContentRef.current?.scrollTo({ left: widgetsContentRef.current.scrollLeft + 325, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    widgetsContentRef.current?.scrollTo({ left: widgetsContentRef.current.scrollLeft - 325, behavior: 'smooth' });
  };

  const showNotice = (notice: NewsItem) => {
    router.push(`/noticia/${notice.slug}`);
  };

  return (
    <header
      className={`pt-5 row ${styles.header}`}
      style={{
        backgroundImage: `url(${pathBackground})`,
        backgroundPosition: hasAddCenter ? 'center' : undefined,
        height: `${headerHeight}px`,
      }}
    >
      <div className="col-12 px-custom pt-5" style={{ zIndex: 9999 }}>
        <div className="align-items-between d-flex justify-content-center pt-5 row h-100">
          <div className="col-12 pt-4 text-white">
            <p className="mb-0">TRIBUNAL DE CUENTAS</p>
            <p>RÍO NEGRO</p>
          </div>

          {isShowHeaderNotices && (
            <div className="fade-in">
              <div className="col-12 d-flex justify-content-center justify-content-md-end mb-2 mb-md-0" style={{ marginTop: '122px' }}>
                <a href="https://x.com/tcrionegro" target="_blank" rel="noopener noreferrer" className="text-light">
                  <i className="fa-brands fa-x-twitter fa-xl" style={{ marginRight: '10px' }}></i>
                </a>
                <a href="https://www.linkedin.com/company/tribunal-de-cuentas-rio-negro/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-light">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </div>

              <h4 className="h4 text-white text-center">ÚLTIMAS NOTICIAS</h4>

              <div ref={widgetsContentRef} className="col-12 justify-content-center" style={{ overflow: 'hidden' }}>
                <div className={styles.btnLeft}>
                  <i className="fa-solid fa-circle-left fa-2xl pointer text-muted" onClick={scrollLeft}></i>
                </div>
                <div className={styles.btnRight}>
                  <i className="fa-solid fa-circle-right fa-2xl pointer text-muted" onClick={scrollRight}></i>
                </div>

                <div className={`px-2 row ${styles.contentNews}`}>
                  {news.map((item) => (
                    <div key={item.slug} className={styles.new}>
                      <img
                        src={item.img}
                        onClick={() => showNotice(item)}
                        className={`${styles.imgNew} pointer w-100 ${item.isWithFilterWhiteAndBlack ? styles.blackAndWhite : ''}`}
                        alt="Imagen de noticia"
                      />
                      <div className={`${styles.card} pointer p-3`} onClick={() => showNotice(item)}>
                        <small className="text-muted">
                          <small>{item.date}</small>
                        </small>
                        <small className="my-2" style={{ fontWeight: 500, color: '#34373E' }}>
                          <strong>{item.title}</strong>
                        </small>
                        <small className="font-weight-light mb-2">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={styles.divOpacity}
        style={{ height: `${headerHeight}px` }}
      />
    </header>
  );
}
