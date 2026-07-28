"use client";

import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2>ReyCloud</h2>

      <div className="search">

        <Search size={20}/>

        <input
          placeholder="Cari Produk..."
        />

      </div>

      <User size={24}/>

    </nav>
  );
}
