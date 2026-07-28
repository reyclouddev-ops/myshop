"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ nama, harga, kategori }) {
  const router = useRouter();

  return (
    <div className="product">
      <span className="badge">READY</span>

      <h2>{nama}</h2>
      <h3>{harga}</h3>

      <button
        onClick={() => {
          router.push(
            `/checkout?kategori=${encodeURIComponent(kategori)}&produk=${encodeURIComponent(nama)}&harga=${encodeURIComponent(harga)}`
          );
        }}
      >
        Checkout
      </button>
    </div>
  );
}
