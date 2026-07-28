"use client";

import Link from "next/link";

import{

House,

ShoppingBag,

Package,

User

}from"lucide-react"

export default function BottomNav(){

return(

<nav className="bottom">

<Link href="/">

<House/>

Home

</Link>

<Link href="/shop">

<ShoppingBag/>

Shop

</Link>

<Link href="/checkout">

<Package/>

Order

</Link>

<Link href="/account">

<User/>

Akun

</Link>

</nav>

)

}
