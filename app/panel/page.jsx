import panel from "@/data/panel"
import ProductCard from "@/components/ProductCard"

export default function Panel(){

return(

<div className="container">

<h1>

🖥️ Panel Pterodactyl

</h1>

<div className="grid">

{

panel.map((item,index)=>(

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
