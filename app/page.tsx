import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="card mb-4">
        <div className="card-body">
          <h1 className="card-title text-primary">Quiz React - Next.js</h1>
          <hr />
          <p><strong>Nama:</strong> (Haykal Firdhan Khaer)</p>
          <p><strong>NIM:</strong> (535240197)</p>
          <p><strong>Topik Project:</strong> List Favorite Group K-Pop</p>
          
          <Link href="/kpop-list" className="btn btn-primary mt-3">
            Mulai Buka List
          </Link>
        </div>
      </div>

      <h2 className="mt-5 mb-3 text-primary">Galeri Grup K-Pop</h2>
          
      <div className="row g-4 justify-content-center">
        
        <div className="col-md-4">
          <div className="card h-100">

            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image 
                src="/images/kpop1.jpg" 
                alt="K-Pop Group 1" 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Newjeans</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image 
                src="/images/kpop2.jpg" 
                alt="K-Pop Group 2" 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Lesserafim</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image 
                src="/images/kpop3.jpg" 
                alt="K-Pop Group 3" 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Aespa</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image 
                src="/images/kpop4.jpg" 
                alt="K-Pop Group 4" 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Illit</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image 
                src="/images/kpop5.jpg" 
                alt="K-Pop Group 5" 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Cortis</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image 
                src="/images/kpop6.jpg" 
                alt="K-Pop Group 6" 
                fill={true}
                style={{ objectFit: 'cover' }}
                className="card-img-top" 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Heart2Heart</h5>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};