import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const menus: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Career", href: "/career" },
        { label: "Case Study", href: "#" },
        { label: "Blogs", href: "#" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Enterprise Websites", href: "#" },
        { label: "Employee Experience", href: "#" },
        { label: "Digital Commerce", href: "#" },
        { label: "Partner Experience", href: "#" },
        { label: "Supplier Experience", href: "#" },
        { label: "Customer Experience", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Liferay Migration", href: "/liferay-migration" },
        { label: "Liferay Support & Maintenance", href: "/liferay-support-and-maintenance" },
        { label: "Enterprise Portal Development", href: "#" },
        { label: "Dedicated Development Team", href: "#" },
        { label: "Back‑end Development", href: "#" },
        { label: "Front‑end Development", href: "#" },
        { label: "Digital Transformation", href: "#" },
        { label: "SaaS Development", href: "#" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { label: "Matomo Integration with Liferay", href: "#" },
        { label: "Microsoft Teams integration with Liferay", href: "#" },
        { label: "Jira Integration With Liferay", href: "#" },
      ],
    },
    {
      title: "Hire Us",
      items: [
        { label: "Liferay", href: "#" },
        { label: "Spring Boot", href: "#" },
        { label: "ReactJS", href: "#" },
        { label: "Healthcare", href: "#" },
      ],
    },
  ]

  return (
    <footer className="relative bg-black text-white">
      {/* Top section: menus with right decorative lines and partial width */}
      <div className="relative mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-16 pb-14">
        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute left-0 right-[20%] top-0 h-px bg-white/20" />
        <div className="pointer-events-none absolute left-0 right-[20%] bottom-0 h-px bg-white/20" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%]">
          <div className="absolute right-0 top-0 h-1/2 w-px bg-white/20" />
          <div className="absolute right-0 bottom-0 h-1/2 w-px bg-white/20" />
          <div className="absolute right-0 top-1/2 h-24 w-24 rounded-tl-[120px] border-t border-l border-white/20" />
        </div>

        <div className="w-[80%] grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {menus.map((menu) => (
            <div key={menu.title}>
              <h4 className="text-sm font-semibold text-white/90">{menu.title}</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {menu.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="hover:text-white">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section: contacts + big logo + motto + bottom bar */}
      <div className="relative mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-10 pb-16">
        {/* Horizontal divider across 80% width */}
        <div className="pointer-events-none absolute left-0 right-[20%] top-0 h-px bg-white/20" />
        {/* Right decorative curve */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%]">
          <div className="absolute right-0 top-0 h-1/2 w-px bg-white/20" />
          <div className="absolute right-0 bottom-0 h-1/2 w-px bg-white/20" />
          <div className="absolute right-[20%] bottom-0 h-24 w-24 rounded-br-[120px] border-b border-r border-white/20" />
        </div>

        <div className="w-[80%]">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h5 className="text-sm font-semibold">Emails</h5>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <div>
                  <Link href="mailto:sales@ignek.com" className="hover:text-white">
                    sales@ignek.com
                  </Link>
                  <div className="text-xs text-white/60">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="mailto:hr@ignek.com" className="hover:text-white">
                    Hr@ignek.com
                  </Link>
                  <div className="text-xs text-white/60">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold">Call</h5>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <div>
                  <Link href="tel:+916351576580" className="hover:text-white">
                    (+91) 635 157 6580
                  </Link>
                  <div className="text-xs text-white/60">(For sales inquiry)</div>
                </div>
                <div>
                  <Link href="tel:+919328495160" className="hover:text-white">
                    (+91) 932 849 5160
                  </Link>
                  <div className="text-xs text-white/60">(For hiring inquiry)</div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold">Office</h5>
              <p className="mt-4 text-sm text-white/80">
                E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat - 382470
              </p>
            </div>
          </div>

          {/* Big brand logo */}
          <div className="mt-12 flex justify-center">
            <Image src="/images/footer_logo.svg" alt="IGNEK" width={900} height={240} className="h-auto w-full max-w-5xl" />
          </div>
          <p className="mt-6 text-center tracking-[0.3em] text-white/80">DRIVING DIGITAL SOLUTIONS</p>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/20 pt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
            <div>©2025 IGNEK. All rights reserved</div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-white">
                Cookies Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Map
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {/* Social icons */}
              <Link href="#" aria-label="X" className="hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9 3H21l-6.4 7.3L22 21h-5.6l-4.4-6-4.9 6H3l7-8.5L2 3h5.7l4 5.4L18.9 3z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9H18l-.5 2.9h-2.4v7C18.3 21.1 22 17 22 12z" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C3.87 3.5 3 4.37 3 5.48c0 1.1.87 1.98 1.98 1.98S6.96 6.58 6.96 5.48C6.96 4.37 6.09 3.5 4.98 3.5zM3.5 8.5h2.9V21H3.5V8.5zM9.5 8.5h2.8v1.7h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.49V21h-2.9v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21H9.5V8.5z" />
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5 6.2c-.3-1.2-1.3-2.1-2.5-2.3C18.7 3.5 12 3.5 12 3.5s-6.7 0-9 .4C1.7 4.1.7 5 0.5 6.2.1 7.7 0 9.5 0 9.5s-.1 2.2.5 3.3c.3 1.2 1.3 2.1 2.5 2.3 2.3.4 9 .4 9 .4s6.7 0 9-.4c1.2-.2 2.2-1.1 2.5-2.3.6-1.1.5-3.3.5-3.3s.1-1.8-.5-3.3zM9.6 12.3V7.8l5.9 2.3-5.9 2.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}