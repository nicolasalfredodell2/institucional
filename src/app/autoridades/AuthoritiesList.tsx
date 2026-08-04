'use client';

import { useEffect, useState } from 'react';
import { AUTHORITIES_API_URL, type ApiAuthority, type ApiAuthoritiesResponse } from '@/lib/authorities';
import styles from './page.module.scss';

const FALLBACK_IMG = '/assets/img/trib-cuentas-escudo.jpg';

export default function AuthoritiesList() {
  const [authorities, setAuthorities] = useState<ApiAuthority[]>([]);

  useEffect(() => {
    fetch(AUTHORITIES_API_URL)
      .then((res) => res.json())
      .then((json: ApiAuthoritiesResponse) => setAuthorities(json.data))
      .catch(() => setAuthorities([]));
  }, []);

  return (
    <div className="d-flex justify-content-center my-5 py-1 row">
      {authorities.map((auth, i) => (
        <div key={i} className="col-12 col-md-6 col-lg-4">
          <div className="d-flex justify-content-center row">
            <div className="col-12 order-0 text-center">
              <img
                src={auth.img ?? FALLBACK_IMG}
                alt={auth.name}
                className={styles.authImg}
              />
            </div>
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center mt-3 mx-5 text-center">
              <p className="mb-0 subtitle"><strong>{auth.job}</strong></p>
              <p><small>{auth.name}</small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
