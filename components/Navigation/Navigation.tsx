import Image from "next/image"
import Link from "next/link"

const menu = [
  { label: "Company", href: "#" },
  { label: "Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Insights", href: "#" },
]

export default function Navigation() {
  return (
    <header className="relative w-full bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_5%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-30" />
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image src="/images/logo.svg" alt="Ignek logo" width={120} height={28} priority />
        </Link>

        <div className="flex-1" />

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide mr-6">
          {menu.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-white/90 hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Calendar"
            className="rounded-full border border-white/30 p-2 text-white/80 hover:text-white hover:border-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Go"
            className="rounded-full border border-white/30 p-2 text-white/80 hover:text-white hover:border-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17l10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M17 7h-6M17 7v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}