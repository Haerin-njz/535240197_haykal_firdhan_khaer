'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function EditGroup() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (!id) return;
    
    async function fetchGroupData() {
      setLoading(true);
      const res = await fetch(`/api/groups/${id}`);
      if (res.ok) {
        const data = await res.json();
        setName(data.name);
      }
      setLoading(false);
    }
    
    fetchGroupData();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === '') return;

    await fetch(`/api/groups/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    router.push('/kpop-list');
    router.refresh();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Edit Grup</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="groupName" className="form-label">Nama Grup</label>
            <input
              type="text"
              className="form-control"
              id="groupName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              Simpan Perubahan
            </button>
            <Link href="/kpop-list" className="btn btn-secondary">
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}