'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';

interface KpopGroup {
  id: number;
  name: string;
}

export default function KpopList() {
  const [groups, setGroups] = useState<KpopGroup[]>([]);
  const [newGroupName, setNewGroupName] = useState('');

  const storageKey = 'myKpopList';

  useEffect(() => {
    const storedGroups = localStorage.getItem(storageKey);
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(groups));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [groups]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newGroupName.trim() === '') return;

    const newGroup: KpopGroup = {
      id: Date.now(),
      name: newGroupName,
    };

    setGroups([...groups, newGroup]);
    setNewGroupName('');
  };

  const handleDelete = (id: number) => {
    const updatedGroups = groups.filter((group) => group.id !== id);
    setGroups(updatedGroups);
  };

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Favorite K-Pop Group List</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan nama grup K-Pop yang ada di list galeri Kpop..."
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Tambah
            </button>
          </div>
        </form>

        <h3 className="h5">Daftar Grup:</h3>
        {groups.length === 0 ? (
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
                <button
                  onClick={() => handleDelete(group.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
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
};