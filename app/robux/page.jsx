import robux from "@/data/robux"
import ProductCard from "@/components/ProductCard"

export default function Robux(){

return(

<div className="container">

<h1>

⚡ Robux Instant

</h1>

<div className="grid">

{

robux.map((item,index)=>(

<ProductCard

key={index}

nama={item.nama}

harga={item.harga}

/>

))

}

</div>

</div>

)

}
