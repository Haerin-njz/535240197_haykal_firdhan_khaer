import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

async function getFanData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store' 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function ExplorePage() {
  const users: User[] = await getFanData();

  return (
    <div>
      <h1 className="text-primary mb-3">Explore Daftar Fans (from API)</h1>
      <p>Data ini diambil dari public API (jsonplaceholder) sebagai contoh.</p>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map(user => (
          <div key={user.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Website:</strong> {user.website}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-4" />
      <Link href="/" className="btn btn-secondary">
        Kembali ke Home
      </Link>
    </div>
  );
}