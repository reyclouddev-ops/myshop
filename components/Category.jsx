const menu = [

{
nama:"🖥️ Panel Pterodactyl",
link:"/panel"
},

{
nama:"☁️ VPS",
link:"/vps"
},

{
nama:"🌐 Domain",
link:"/domain"
},

{
nama:"💎 Robux Instant",
link:"/robux"
},

{
nama:"⏳ Robux Delay 2 Hari",
link:"/robux-delay"
},

{
nama:"🎟️ GamePass",
link:"/gamepass"
},

{
nama:"🤖 Bot WhatsApp",
link:"/bot"
}

]

export default function Category(){

return(

<div className="category">

{menu.map((item,index)=>(

<a
key={index}
href={item.link}
className="card"
>

{item.nama}

</a>

))}

</div>

)

}
