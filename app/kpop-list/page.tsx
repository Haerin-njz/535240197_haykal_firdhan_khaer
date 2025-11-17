'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface KpopGroup {
  id: number;
  name: string;
}

export default function KpopList() {
  const [groups, setGroups] = useState<KpopGroup[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchGroups() {
    setLoading(true);
    const res = await fetch('/api/groups');
    const data = await res.json();
    setGroups(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newGroupName.trim() === '') return;

    await fetch('/api/groups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newGroupName }),
    });

    setNewGroupName('');
    router.refresh(); 
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/groups/${id}`, {
      method: 'DELETE',
    });
    router.refresh(); 
  };

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Favorite K-Pop Group List (Database)</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan nama grup K-Pop..."
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Tambah
            </button>
          </div>
        </form>

        <h3 className="h5">Daftar Grup:</h3>
        {loading ? (
          <p>Loading...</p>
        ) : groups.length === 0 ? (
          <p className="text-muted">List masih kosong.</p>
        ) : (
          <ul className="list-group">
            {groups.map((group) => (
              <li
                key={group.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <Link href={`/kpop-list/${group.id}`} className="text-decoration-none">
                  {group.name}
                </Link>
                
                <div className="btn-group">
                  <Link href={`/kpop-list/${group.id}/edit`} className="btn btn-outline-secondary btn-sm">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(group.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        <hr className="mt-4" />
        <Link href="/" className="btn btn-secondary">
          Kembali ke Home
        </Link>

      </div>
    </div>
  );
}