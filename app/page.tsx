import { Metadata } from "next"
import Image from "next/image"
import { BlogSection, Footer, HeroCTA } from "../components/Common"
import { Button } from "../components/Button/Button"
import { Accordion } from "../components/Common/Accordion"
export const metadata: Metadata = {
  title: "Ignek - Transform Your Digital Experience",
  description:
    "Leading digital transformation company providing cutting-edge solutions for modern businesses. Transform your digital experience with Ignek today.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ignek.com/",
    title: "Ignek - Transform Your Digital Experience",
    description: "Leading digital transformation company providing cutting-edge solutions for modern businesses.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

const partners = [
  {
    name: "Youngsoft India",
    image: "/images/partner/youngsoftIndia.svg",
  },
  {
    name: "United Nations",
    image: "/images/partner/United-nations.png",
  },
  {
    name: "This",
    image: "/images/partner/This.png",
  },
  {
    name: "Cognizer AI",
    image: "/images/partner/cognizerAI.png",
  },
  {
    name: "Mibusoft",
    image: "/images/partner/mibusoft.png",
  },
  {
    name: "Navvis",
    image: "/images/partner/navvis.png",
  },
  {
    name: "EduTecks",
    image: "/images/partner/youngsoftIndia.svg",
  },
  {
    name: "Infogain",
    image: "/images/partner/youngsoftIndia.svg",
  }
]

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="relative bg-black text-white">
        {/* Top-left subtle radial gradient using provided colors */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_900px_at_8%_0%,#00979E_0%,#00979E00_65%)]" />
        {/* Bottom-right accent near CTA */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_700px_at_95%_85%,#00979E_0%,#0E7BF800_60%)] opacity-40" />

        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-12 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
                Transform Your
                <br />
                <span className="italic font-extrabold text-white/90">DIGITAL EXPERIENCE</span>
                <br />
                <span className="block">With IGNEK Today</span>
              </h1>
              <p className="mt-10 max-w-xl text-sm text-white/80 sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
            </div>
            <div className="md:justify-self-end md:self-end">
              <Button
                href="#discover"
                size="lg"
                intent="secondary"
                className="rounded-full border-white/30 bg-transparent px-6 py-3 text-white hover:bg-white/10 hover:text-white"
              >
                Discover More
              </Button>
            </div>
          </div>

          {/* Divider line matching text color */}
          <div className="mt-10 border-t border-white/30" />

          {/* Logos row: 7 items with spacing and responsive wrap */}
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div key={idx} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
                <Image
                  src={partners[idx]?.image}
                  alt="Partner logo"
                  width={140}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* End-to-End Digital Transformation Partner */}
      <section className="relative bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Your End-to-End Digital Transformation Partner</h2>
            </div>
            <p className="max-w-xl text-white/80">
              We help businesses craft a clear and actionable digital roadmap that aligns with both short-term objectives
              and long-term vision
            </p>
          </div>

          {/* Digital Experience + Accordions */}
          <div className="mt-20 md:mt-24 grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Digital Experience</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              <Accordion
                items={[
                  { title: "DX Strategy", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                  { title: "DX Design", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                  { title: "DX Engineering", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                ]}
                defaultOpenIndex={0}
              />
              <Accordion
                items={[
                  { title: "DX Intelligence", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                  { title: "DX Marketing", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                  { title: "DX Infrastructure", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                ]}
                defaultOpenIndex={null}
              />
            </div>
          </div>

          {/* Staff Augmentation + Accordions */}
          <div className="mt-28 lg:mt-32 grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Staff augmentation</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="grid gap-10 md:gap-12">
              <Accordion
                items={[
                  { title: "Technical Excellence", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                  { title: "Value-Based Pricing", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                  { title: "Training", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
                ]}
                defaultOpenIndex={null}
              />
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
      <HeroCTA />
    </main>
  )
}
