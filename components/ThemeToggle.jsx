"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

const [dark,setDark]=useState(false)

useEffect(()=>{

document.body.className=dark?"dark":""

},[dark])

return(

<button

className="theme"

onClick={()=>setDark(!dark)}

>

{

dark?

<Sun size={20}/>

:

<Moon size={20}/>

}

</button>

)

}
