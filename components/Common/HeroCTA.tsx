import Image from "next/image"
import Link from "next/link"

interface HeroCTAProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  expertName?: string
  expertTitle?: string
  expertEmail?: string
}

// Common black CTA section with gradient-border buttons and an Expert card
export default function HeroCTA({
  title = "Flexible Platforms. Scalable Experiences.",
  subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  ctaText = "Build Your Liferay Portal",
  ctaHref = "#",
  expertName = "Bhavin Panchani",
  expertTitle = "Founder & Director",
  expertEmail = "sales@ignek.com",
}: HeroCTAProps) {
  return (
    <section className="relative bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-16 md:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl leading-snug sm:text-4xl md:text-5xl font-semibold">{title}</h2>
            <p className="mt-6 max-w-2xl text-sm sm:text-base text-white/80">{subtitle}</p>

            <div className="mt-8">
              {/* Gradient border link: from black to brand color at right */}
              <Link href={ctaHref} className="inline-block rounded-full p-[2px] bg-gradient-to-r from-black via-black to-[#00979E]">
                <span className="block rounded-full bg-black px-5 py-2.5 text-sm text-white">
                  {ctaText}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Expert card */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-white/90 text-sm font-semibold">Talk To Expert</div>

            <div className="mt-5 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/20 overflow-hidden">
                {/* Placeholder avatar */}
                <Image src="/images/bhavinImage.png" alt="Expert" width={48} height={48} className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="font-semibold">{expertName}</div>
                <div className="text-xs text-white/70">{expertTitle}</div>
              </div>
            </div>

            {/* Primary button */}
            <div className="mt-6">
              <Link href="#" className="inline-block w-full rounded-full p-[2px] bg-gradient-to-r from-black via-black to-[#00979E]">
                <span className="block rounded-full bg-black px-5 py-2.5 text-sm text-white text-center">Schedule Meeting</span>
              </Link>
            </div>

            {/* Email link opens inbox */}
            <div className="mt-6 text-sm">
              <span className="text-white/70">Prefer email?</span>
              <Link href={`mailto:${expertEmail}`} className="ml-2 underline text-white/90">
                {expertEmail}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}