"use client";

import { useEffect,useState } from "react";

export default function Orders(){

const[data,setData]=useState([]);

const[search,setSearch]=useState("");

async function load(){

const res=await fetch("/api/orders");

const json=await res.json();

setData(json);

}

useEffect(()=>{

load();

},[]);

async function ubah(id,status){

await fetch("/api/orders/"+id,{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status

})

});

load();

}

async function hapus(id){

if(!confirm("Hapus Order?")) return;

await fetch("/api/orders/"+id,{

method:"DELETE"

});

load();

}

const filter=data.filter(item=>

item.nama.toLowerCase().includes(search.toLowerCase())||

item.produk.toLowerCase().includes(search.toLowerCase())

);

const pending=data.filter(v=>v.status=="Pending").length;

const proses=data.filter(v=>v.status=="Diproses").length;

const selesai=data.filter(v=>v.status=="Selesai").length;

return(

<div className="container">

<h1>

Dashboard Order

</h1>

<div className="stats">

<div>

<h2>{data.length}</h2>

<p>Total</p>

</div>

<div>

<h2>{pending}</h2>

<p>Pending</p>

</div>

<div>

<h2>{proses}</h2>

<p>Diproses</p>

</div>

<div>

<h2>{selesai}</h2>

<p>Selesai</p>

</div>

</div>

<input

className="search"

placeholder="Cari Order..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

{

filter.map(item=>(

<div

className="order"

key={item._id}

>

<h2>

{item.produk}

</h2>

<p>

👤 {item.nama}

</p>

<p>

📱 {item.wa}

</p>

<p>

💰 {item.harga}

</p>

<p>

📌 {item.status}

</p>

<select

value={item.status}

onChange={(e)=>ubah(

item._id,

e.target.value

)}

>

<option>Pending</option>

<option>Diproses</option>

<option>Selesai</option>

</select>

<button

onClick={()=>hapus(item._id)}

>

Hapus

</button>

</div>

))

}

</div>

)

}
