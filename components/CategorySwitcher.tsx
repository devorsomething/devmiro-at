"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Services", path: "/services" },
  { name: "IT Companies", path: "/it-companies" },
  { name: "Fixed Price", path: "/fixed-price" },
];

export default function CategorySwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mb-16 relative z-10">
      <div className="glass-panel flex p-1 rounded-full items-center shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
        {categories.map((cat) => {
          const isActive = pathname === cat.path;
          return (
            <Link
              key={cat.path}
              href={cat.path}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${isActive ? "bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(0,229,255,0.4)]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
