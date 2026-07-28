"use client";

import { useEffect,useState } from "react";

export default function Products(){

const[data,setData]=useState([]);

useEffect(()=>{

fetch("/api/products")

.then(res=>res.json())

.then(setData)

},[]);

return(

<div className="container">

<h1>

Daftar Produk

</h1>

{

data.map((item)=>(

<div

className="product"

key={item._id}

>

<h2>{item.nama}</h2>

<p>{item.harga}</p>

<p>{item.kategori}</p>

</div>

))

}

</div>

)

}
