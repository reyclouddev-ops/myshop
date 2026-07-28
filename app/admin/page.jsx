"use client";

import Link from "next/link";

export default function Admin() {

  async function logout() {

    await fetch("/api/logout", {
      method: "POST"
    });

    window.location.href = "/login";
  }

  return (
    <div className="admin">

      <h1>👑 Dashboard Admin</h1>

      <Link href="/admin/products">
        📦 Kelola Produk
      </Link>

      <Link href="/admin/orders">
        🛒 Pesanan
      </Link>

      <Link href="/admin/categories">
        📂 Kategori
      </Link>

      <Link href="/admin/voucher">
        🎟️ Voucher
      </Link>

      <Link href="/admin/settings">
        ⚙️ Pengaturan
      </Link>

      <button
        onClick={logout}
        className="logoutBtn"
      >
        🚪 Logout
      </button>

    </div>
  );
}
