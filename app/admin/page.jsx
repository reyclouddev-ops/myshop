import Link from "next/link";

export default function Admin(){

return(

<div className="admin">

<h1>

Dashboard Admin

</h1>

<Link href="/admin/products">

📦 Kelola Produk

</Link>

<Link href="/admin/orders">

🛒 Pesanan

</Link>

</div>

)

}
