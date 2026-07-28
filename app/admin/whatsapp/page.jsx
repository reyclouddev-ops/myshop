"use client";

import { useEffect, useState } from "react";

export default function WhatsappAdmin() {

  const [list, setList] = useState([]);

  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");

  async function load() {
    const res = await fetch("/api/whatsapp");
    const data = await res.json();
    setList(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function tambah() {

    if (!nama || !nomor) {
      return alert("Lengkapi data!");
    }

    await fetch("/api/whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nama,
        nomor,
        status: true,
        prioritas: list.length + 1
      })
    });

    setNama("");
    setNomor("");

    load();
  }

  async function status(item) {

    await fetch("/api/whatsapp/" + item._id, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        ...item,
        status: !item.status
      })

    });

    load();
  }

  async function hapus(id) {

    if (!confirm("Hapus nomor ini?")) return;

    await fetch("/api/whatsapp/" + id, {

      method: "DELETE"

    });

    load();
  }

  return (

    <div className="container">

      <h1>WhatsApp Admin</h1>

      <input
        placeholder="Nama Admin"
        value={nama}
        onChange={(e)=>setNama(e.target.value)}
      />

      <input
        placeholder="628xxxxxxxxxx"
        value={nomor}
        onChange={(e)=>setNomor(e.target.value)}
      />

      <button onClick={tambah}>
        ➕ Tambah Nomor
      </button>

      <br /><br />

      {

        list.map((item)=>(

          <div
            className="product"
            key={item._id}
          >

            <h2>{item.nama}</h2>

            <p>{item.nomor}</p>

            <p>

              Status :

              {

                item.status

                ?

                " 🟢 Aktif"

                :

                " 🔴 Nonaktif"

              }

            </p>

            <p>

              Prioritas : {item.prioritas}

            </p>

            <button
              onClick={()=>status(item)}
            >

              {

                item.status

                ?

                "Nonaktifkan"

                :

                "Aktifkan"

              }

            </button>

            <button
              onClick={()=>hapus(item._id)}
            >

              Hapus

            </button>

          </div>

        ))

      }

    </div>

  );

}
