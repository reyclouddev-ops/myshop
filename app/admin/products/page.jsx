"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [data, setData] = useState([]);

  async function load() {
    const res = await fetch("/api/products");
    const result = await res.json();
    setData(result);
  }

  useEffect(() => {
    load();
  }, []);

  async function hapus(id) {
    if (!confirm("Hapus produk ini?")) return;

    await fetch("/api/products/" + id, {
      method: "DELETE"
    });

    load();
  }

  return (
    <div className="container">

      <h1 style={{ marginBottom: "20px" }}>
        📦 Kelola Produk
      </h1>

      <Link
        href="/admin/products/add"
        className="adminBtn"
      >
        ➕ Tambah Produk
      </Link>

      <div style={{ marginTop: "20px" }}>

        {data.length === 0 ? (
          <p>Belum ada produk.</p>
        ) : (
          data.map((item) => (
            <div className="product" key={item._id}>
              <h2>{item.nama}</h2>

              <h3>Rp {Number(item.harga).toLocaleString("id-ID")}</h3>

              <p>Kategori: {item.kategori}</p>

              <Link
                href={`/admin/products/edit/${item._id}`}
                className="editBtn"
              >
                ✏️ Edit
              </Link>

              <button
                className="deleteBtn"
                onClick={() => hapus(item._id)}
              >
                🗑️ Hapus
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}
