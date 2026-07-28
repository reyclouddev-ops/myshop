"use client";

import { useEffect,useState } from "react";

export default function Orders(){

const[data,setData]=useState([]);

useEffect(()=>{

fetch("/api/orders")

.then(r=>r.json())

.then(setData);

},[]);

return(

<div className="container">

<h1>

Daftar Order

</h1>

{

data.map(item=>(

<div className="product"

key={item._id}>

<h2>

{item.produk}

</h2>

<p>

👤 {item.nama}

</p>

<p>

💰 {item.harga}

</p>

<p>

📌 {item.status}

</p>

</div>

))

}

</div>

)

}
