'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PDF_MAP: Record<string, { url: string; filename: string }> = {
  'ddc0afb7f9d068538bf5a4bf2cd63aecb07092df87483053c0eae4e2d8c531a3': {
    url: '/assets/memories/2025.pdf',
    filename: 'memoria2025TCRN.pdf',
  },
  'ddc0afb7f9d068538bf5a4bf2cd63aecb07092df87483053c0eae4e2d8c531a4': {
    url: '/assets/memories/2024.pdf',
    filename: 'memoria2024TCRN.pdf',
  },
  'ddc0afb7f9d068538bf5a4bf2cd63aecb07092df87483053c0eae4e2d8c531a5': {
    url: '/assets/memories/2023.pdf',
    filename: 'memoria2023TCRN.pdf',
  },
};

export default function MemoriaPage() {
  const params = useParams();
  const hash = params?.hash as string;
  const [status, setStatus] = useState<'loading' | 'done' | 'error'>('loading');

  useEffect(() => {
    const pdf = PDF_MAP[hash];
    if (!pdf) {
      setStatus('error');
      return;
    }

    fetch(pdf.url)
      .then((res) => {
        if (!res.ok) throw new Error('not found');
        return res.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdf.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setStatus('done');
      })
      .catch(() => setStatus('error'));
  }, [hash]);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      {status === 'loading' && <p>Descargando memoria...</p>}
      {status === 'done' && <p>La descarga comenzó.</p>}
      {status === 'error' && <p>No se encontró el archivo solicitado.</p>}
    </div>
  );
}
