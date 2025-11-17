import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-5 pt-5">
      <div className="card w-75 mx-auto shadow-lg">
        <div className="card-body p-5">
          <h1 className="display-1 text-primary fw-bold">404</h1>
          <h2 className="card-title">Halaman Tidak Ditemukan</h2>
          <p className="card-text fs-5 text-muted">
            Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan.
          </p>
          <Link href="/" className="btn btn-primary btn-lg mt-3">
            Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}