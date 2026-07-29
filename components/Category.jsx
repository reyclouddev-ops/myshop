import Link from "next/link";
import {
  Server,
  Cloud,
  Globe,
  Gamepad2,
  Bot,
  Gift,
  Code,
  Cpu
} from "lucide-react";

const menu = [
  {
    name: "Panel",
    icon: <Server size={34} />,
    link: "/panel"
  },
  {
    name: "VPS",
    icon: <Cloud size={34} />,
    link: "/vps"
  },
  {
    name: "Domain",
    icon: <Globe size={34} />,
    link: "/domain"
  },
  {
    name: "GamePass",
    icon: <Gamepad2 size={34} />,
    link: "/gamepass"
  },
  {
    name: "Sewa Bot",
    icon: <Bot size={34} />,
    link: "/sewabot"
  },
  {
    name: "Robux",
    icon: <Gift size={34} />,
    link: "/robux"
  },
  {
    name: "Script",
    icon: <Code size={34} />,
    link: "/script"
  },
  {
    name: "Hosting",
    icon: <Cpu size={34} />,
    link: "/hosting"
  }
];

export default function Category() {
  return (
    <section className="categorySection">

      <div className="title">
        <h2>✨ Kategori</h2>
        <p>Pilih layanan favoritmu</p>
      </div>

      <div className="categoryGrid">

        {menu.map((item, index) => (
          <Link
            href={item.link}
            className="categoryCard"
            key={index}
          >
            <div className="categoryIcon">
              {item.icon}
            </div>

            <span>{item.name}</span>
          </Link>
        ))}

      </div>

    </section>
  );
}
