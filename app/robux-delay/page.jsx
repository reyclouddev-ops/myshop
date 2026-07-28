import robuxDelay from "@/data/robuxDelay";
import ProductCard from "@/components/ProductCard";

export default function RobuxDelay() {
  return (
    <div className="container">
      <h1>⏳ Robux Delay 2 Hari</h1>

      <div className="grid">
        {robuxDelay.map((item, index) => (
          <ProductCard
            key={index}
            nama={item.nama}
            harga={item.harga}
            kategori="robux-delay"
          />
        ))}
      </div>
    </div>
  );
}
