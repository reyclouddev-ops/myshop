export default function ProductCard({nama,harga}){

return(

<div className="product">

<span className="badge">

READY

</span>

<h2>{nama}</h2>

<h3>{harga}</h3>

<button>

Checkout

</button>

</div>

)

}
