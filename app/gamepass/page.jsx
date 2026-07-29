"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function GamePass() {
  const [gamepass, setGamepass] = useState([]);
  const [search, setSearch] = useState("");

  async function load() {
    const res = await fetch("/api/gamepass");
    const data = await res.json();
    setGamepass(data);
  }

  useEffect(() => {
    load();
  }, []);

  const list = gamepass.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <div className="banner">
        <h1>🎮 Game Pass</h1>
        <p>Beli Game Pass Roblox dengan cepat & aman.</p>
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
        {list.length === 0 ? (
          <p>Belum ada Game Pass.</p>
        ) : (
          list.map((item) => (
            <div className="product" key={item._id}>

              <span className="badge">
                Ready
              </span>

              <h2>{item.nama}</h2>

              <p>{item.game}</p>

              <h3>
                Rp {Number(item.harga).toLocaleString("id-ID")}
              </h3>

              <Link href={`/checkout/gamepass/${item._id}`}>
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
