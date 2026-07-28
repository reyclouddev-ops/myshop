import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">

      <h1>404</h1>

      <h2>Halaman Tidak Ditemukan</h2>

      <Link href="/">
        Kembali ke Home
      </Link>

    </div>
  );
}
