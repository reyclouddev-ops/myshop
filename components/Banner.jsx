import Link from "next/link";

export default function Banner() {
  return (
    <section className="hero">

      <span className="heroBadge">
        🚀 Digital Store Terpercaya
      </span>

      <h1>
        ReyCloudShop
      </h1>

      <p>
        Panel • VPS • Domain • GamePass • Robux • Script
      </p>

      <div className="heroButton">

        <Link href="/shop">
          🛒 Mulai Belanja
        </Link>

        <Link href="/panel">
          💻 Panel
        </Link>

      </div>

    </section>
  );
}
