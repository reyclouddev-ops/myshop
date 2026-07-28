import ProductCard from "@/components/ProductCard"
import robuxDelay from "@/data/robuxDelay"

export default function Page(){

return(

<div className="container">

<h1>

⏳ Robux Delay 2 Hari

</h1>

<div className="grid">

{

robuxDelay.map((item,index)=>(

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
