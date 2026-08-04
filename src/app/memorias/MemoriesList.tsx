'use client';

import { useEffect, useState } from 'react';
import { documentsUrl, type ApiDocument, type ApiDocumentsResponse } from '@/lib/documents';

const MEMORIES_URL = documentsUrl('annual-report');

export default function MemoriesList() {
  const [memories, setMemories] = useState<ApiDocument[]>([]);

  useEffect(() => {
    fetch(MEMORIES_URL)
      .then((res) => res.json())
      .then((json: ApiDocumentsResponse) => setMemories(json.data ?? []))
      .catch(() => setMemories([]));
  }, []);

  return (
    <ul className="list-group">
      {memories.map((memory) => (
        <a
          key={memory.name}
          href={memory.path}
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex justify-content-between list-group-item list-group-item-action pointer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <strong>{memory.name}</strong>
          <i className="fa-regular fa-file-pdf" style={{ marginTop: '5px' }} />
        </a>
      ))}
    </ul>
  );
}
