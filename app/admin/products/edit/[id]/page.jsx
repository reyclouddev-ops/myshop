"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit() {

  const { id } = useParams();

  const [nama, setNama] = useState("");

  const [harga, setHarga] = useState("");

  const [kategori, setKategori] = useState("");

  useEffect(() => {

    fetch("/api/products/" + id)

      .then(res => res.json())

      .then(data => {

        setNama(data.nama);

        setHarga(data.harga);

        setKategori(data.kategori);

      });

  }, []);

  async function simpan() {

    await fetch("/api/products/" + id, {

      method: "PUT",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        nama,

        harga,

        kategori

      })

    });

    alert("Produk berhasil diperbarui");

  }

  return (

    <div className="checkout">

      <h1>Edit Produk</h1>

      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
      />

      <input
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      />

      <button onClick={simpan}>

        Simpan

      </button>

    </div>

  );

}
