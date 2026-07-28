"use client";

import { useState } from "react";

export default function Add(){

const[nama,setNama]=useState("");

const[harga,setHarga]=useState("");

const[kategori,setKategori]=useState("");

async function simpan(){

await fetch("/api/products",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

nama,

harga,

kategori

})

});

alert("Produk berhasil ditambahkan");

}

return(

<div className="checkout">

<h1>

Tambah Produk

</h1>

<input

placeholder="Nama Produk"

onChange={(e)=>setNama(e.target.value)}

/>

<input

placeholder="Harga"

onChange={(e)=>setHarga(e.target.value)}

/>

<select

onChange={(e)=>setKategori(e.target.value)}

>

<option>Panel</option>

<option>Robux</option>

<option>Robux Delay</option>

<option>GamePass</option>

<option>VPS</option>

<option>Domain</option>

</select>

<button

onClick={simpan}

>

Simpan

</button>

</div>

)

}
