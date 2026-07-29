"use client";

export default function SewaBot() {
  return (
    <div className="container">

      <div className="banner">
        <h1>🤖 Sewa Bot WhatsApp</h1>
        <p>Bot aktif 24 Jam • Cocok untuk Grup, Komunitas & Bisnis</p>
      </div>

      <div className="promo">
        ⚡ Promo Sewa Bot WhatsApp
      </div>

      {/* Paket Harian */}
      <h2 style={{ marginBottom: 15 }}>📅 Paket Harian</h2>

      <div className="grid">

        <div className="product">
          <span className="badge">Ready</span>
          <h2>1 Hari</h2>
          <h3>Rp2.000</h3>
          <button>Beli Sekarang</button>
        </div>

        <div className="product">
          <span className="badge">Ready</span>
          <h2>3 Hari</h2>
          <h3>Rp5.000</h3>
          <button>Beli Sekarang</button>
        </div>

        <div className="product">
          <span className="badge">Ready</span>
          <h2>7 Hari</h2>
          <h3>Rp10.000</h3>
          <button>Beli Sekarang</button>
        </div>

      </div>

      <br />

      {/* Paket Bulanan */}
      <h2 style={{ marginBottom: 15 }}>📆 Paket Bulanan</h2>

      <div className="grid">

        <div className="product">
          <span className="badge">Ready</span>
          <h2>1 Bulan</h2>
          <h3>Rp15.000</h3>
          <button>Beli Sekarang</button>
        </div>

        <div className="product">
          <span className="badge">Ready</span>
          <h2>2 Bulan</h2>
          <h3>Rp25.000</h3>
          <button>Beli Sekarang</button>
        </div>

        <div className="product">
          <span className="badge">Ready</span>
          <h2>3 Bulan</h2>
          <h3>Rp35.000</h3>
          <button>Beli Sekarang</button>
        </div>

      </div>

      <br />

      {/* Paket VIP */}
      <h2 style={{ marginBottom: 15 }}>👑 Paket VIP</h2>

      <div className="grid">

        <div className="product">
          <span className="badge">VIP</span>
          <h2>1 Bulan VIP</h2>
          <h3>Rp30.000</h3>
          <button>Beli Sekarang</button>
        </div>

        <div className="product">
          <span className="badge">VIP</span>
          <h2>3 Bulan VIP</h2>
          <h3>Rp75.000</h3>
          <button>Beli Sekarang</button>
        </div>

        <div className="product">
          <span className="badge">VIP</span>
          <h2>Permanen VIP</h2>
          <h3>Rp120.000</h3>
          <button>Beli Sekarang</button>
        </div>

      </div>

      <br />

      <div className="product">
        <h2>✨ Fitur Bot</h2>
        <br />
        <p>🤖 AI Chat</p>
        <p>🎨 Sticker Maker</p>
        <p>📥 Downloader Media</p>
        <p>🛡️ Anti Link</p>
        <p>👋 Welcome & Goodbye</p>
        <p>🎮 Game & Hiburan</p>
        <p>🔍 Search Menu</p>
        <p>👥 Group Management</p>
        <p>⏰ Jadwal & Reminder</p>
        <p>➕ Dan masih banyak fitur lainnya.</p>
      </div>

      <br />

      <div className="product">
        <h2>👑 Benefit VIP</h2>
        <br />
        <p>✅ Semua fitur Premium</p>
        <p>🚀 Prioritas Update Terbaru</p>
        <p>💬 Prioritas Support Admin</p>
        <p>⭐ Fitur Eksklusif VIP</p>
        <p>♾️ Penggunaan Lebih Luas</p>
      </div>

      <br />

      <div className="product">
        <h2>🔥 Kenapa Memilih Bot Kami?</h2>
        <br />
        <p>🟢 Online 24 Jam</p>
        <p>⚡ Fast Response</p>
        <p>🛠️ Mudah Digunakan</p>
        <p>👥 Cocok Untuk Grup & Pribadi</p>
        <p>🔒 Aman & Terpercaya</p>
        <p>💯 Garansi Selama Masa Sewa</p>
      </div>

      <br />

      <div className="banner">
        <h2>📱 Chat Admin</h2>
        <br />
        <h1>6281260512743</h1>
        <br />
        <button
          onClick={() =>
            window.open("https://wa.me/6281260512743")
          }
        >
          Chat WhatsApp
        </button>
      </div>

    </div>
  );
        }
