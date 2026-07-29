"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbarTop">
        <h1 className="logo">☁️ ReyCloud</h1>

        <Link href="/akun" className="profile">
          <User size={24} />
        </Link>
      </div>

      <Link href="/search" className="searchBox">
        <Search size={20} />

        <span>Cari Produk...</span>
      </Link>

    </header>
  );
}
