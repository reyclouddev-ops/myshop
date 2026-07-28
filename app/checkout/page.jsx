"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Checkout() {

  const search = useSearchParams();

  const kategori = search.get("kategori");
  const produk = search.get("produk");
  const harga = search.get("harga");

  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("");
  const [egg, setEgg] = useState("NodeJS");

 
    async function bayar() {

  if (!nama || !wa || !username) {
    return alert("Lengkapi data terlebih dahulu!");
  }

  if (kategori === "panel" && !server) {
    return alert("Masukkan Request Server Name!");
  }

  // Simpan Order
  await fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nama,
      wa,
      username,
      produk,
      kategori,
      harga,
      serverName: server,
      egg,
      status: "Pending"
    })
  });

  // Ambil nomor WA yang aktif
  const res = await fetch("/api/whatsapp");
  const list = await res.json();

  const admin = list.find(item => item.status);

  if (!admin) {
    return alert("Maaf, saat ini tidak ada Admin yang sedang aktif.");
  }

  let pesan = "";

  if (kategori === "panel") {

    pesan = `Halo Admin ReyCloud 👋

Saya ingin membeli Panel.

━━━━━━━━━━━━━━

Produk : ${produk}
Harga : ${harga}

Nama : ${nama}
No WA : ${wa}

Username Panel : ${username}
Server Name : ${server}
Egg : ${egg}

━━━━━━━━━━━━━━`;

  } else {

    pesan = `Halo Admin ReyCloud 👋

Saya ingin melakukan pembelian.

━━━━━━━━━━━━━━

Kategori : ${kategori}
Produk : ${produk}
Harga : ${harga}

Nama : ${nama}
No WA : ${wa}

Username Roblox : ${username}

━━━━━━━━━━━━━━`;

  }

  window.location.href =
    `https://wa.me/${admin.nomor}?text=${encodeURIComponent(pesan)}`;

}

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <h2>{produk}</h2>

      <h3>{harga}</h3>

      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        placeholder="Nomor WhatsApp"
        value={wa}
        onChange={(e) => setWa(e.target.value)}
      />

      <input
        placeholder={
          kategori === "panel"
            ? "Username Panel"
            : "Username Roblox"
        }
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {kategori === "panel" && (
        <>

          <input
            placeholder="Request Server Name"
            value={server}
            onChange={(e) => setServer(e.target.value)}
          />

          <select
            value={egg}
            onChange={(e) => setEgg(e.target.value)}
          >
            <option>NodeJS</option>
            <option>Python</option>
            <option>PHP</option>
            <option>Java</option>
            <option>Bun</option>
            <option>Go</option>
            <option>Rust</option>
            <option>Minecraft</option>
          </select>

        </>
      )}

      <button onClick={bayar}>
        💬 Bayar via WhatsApp
      </button>

    </div>
  );
}
