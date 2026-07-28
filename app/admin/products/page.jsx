"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {

  const [data, setData] = useState([]);

  async function load() {

    const res = await fetch("/api/products");

    setData(await res.json());

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

      <h1>Kelola Produk</h1>

      <Link href="/admin/products/add">

        ➕ Tambah Produk

      </Link>

      <br /><br />

      {

        data.map((item) => (

          <div className="product" key={item._id}>

            <h2>{item.nama}</h2>

            <h3>{item.harga}</h3>

            <p>{item.kategori}</p>

            <Link href={`/admin/products/edit/${item._id}`}>

              ✏️ Edit

            </Link>

            <button

              onClick={() => hapus(item._id)}

            >

              🗑️ Hapus

            </button>

          </div>

        ))

      }

    </div>

  );

}
