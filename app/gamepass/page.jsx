"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function GamePass() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function load() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      const gamePass = data.filter((item) => {
        const kategori = (item.kategori || "")
          .replace(/\s+/g, "")
          .toLowerCase();

        return kategori === "gamepass";
      });

      setProducts(gamePass);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const keyword = search
    .replace(/\s+/g, "")
    .toLowerCase();

  const filtered = products.filter((item) => {
    const nama = (item.nama || "")
      .replace(/\s+/g, "")
      .toLowerCase();

    const kategori = (item.kategori || "")
      .replace(/\s+/g, "")
      .toLowerCase();

    return (
      nama.includes(keyword) ||
      kategori.includes(keyword)
    );
  });

  return (
    <div className="container">

      <div className="banner">
        <h1>🎮 Game Pass</h1>
        <p>Pilih Game Pass favoritmu.</p>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Cari Game Pass..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">

        {filtered.length === 0 ? (

          <p>Belum ada Game Pass.</p>

        ) : (

          filtered.map((item) => (

            <div className="product" key={item._id}>

              <span className="badge">
                {item.status || "Ready"}
              </span>

              <h2>{item.nama}</h2>

              <h3>
                Rp {Number(item.harga).toLocaleString("id-ID")}
              </h3>

              <p>{item.kategori}</p>

              <Link href={`/checkout/${item._id}`}>
                <button>
                  🛒 Beli Sekarang
                </button>
              </Link>

            </div>

          ))

        )}

      </div>

    </div>
  );
}
