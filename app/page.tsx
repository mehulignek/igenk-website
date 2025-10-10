import { Metadata } from "next"
import Image from "next/image"
import { BlogSection } from "../components/Common"
import { Accordion } from "../components/Common/Accordion"
import IntermediateFrame from "components/IntermediateFrame"
import OurCapabilities from "components/OurCapabilities/OurCapabilities"
import FlexiblePlatforms from "components/FlexiblePlatforms/FlexiblePlatforms"
import WhatWeBring from "components/WhatWeBring/WhatWeBring"
import Achievements from "components/Achievements/Achievements"
import SuccessStories from "components/success-stories/SuccessStories"
import FAQSection from "components/Common/FAQSection"
import RatingsSection from "components/Ratings/RatingsSection"
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
  },
]

export default function HomePage() {
  return (
    <main className="">
      <section className="relative overflow-hidden bg-black text-white">
        {/* Top-left subtle radial gradient using provided colors */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full">
          <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#00979E] opacity-20 blur-[100px]" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#0E7BF8] opacity-15 blur-[100px]" />
        </div>

        <div className="mx-auto w-full px-4 pt-20 pb-12 md:px-8 md:pb-24 lg:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h1 className="text-6xl leading-none font-extrabold md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8.25rem]">
            Transform Your
            <br />
            <span className="italic">DIGITAL EXPERIENCE</span>
            <br />
            <span>With IGNEK Today</span>
          </h1>
          <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
            <p className="max-w-xl text-lg text-white/80 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            </p>

            <div className="md:self-end md:justify-self-end pb-3">
              <a
                href="#discover"
                className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-3 text-sm text-white transition-colors hover:border-white/40"
              >
                <svg
                  className="h-5 w-5 rotate-90 transition-transform group-hover:rotate-[135deg]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 8.5L16 12L12.5 15.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="pr-2">Discover More</span>
              </a>
            </div>
          </div>

          {/* Divider line matching text color */}
          <div className="mt-14 border-t border-white/30" />

          {/* Logos row: 7 items with spacing and responsive wrap */}
          <div className="mt-10 overflow-hidden">
            {/* Inner container is the animated flex row */}
            <div className="animate-marquee-fast flex gap-x-16 whitespace-nowrap">
              {/* We map the partners array twice for a seamless loop */}
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex w-44 flex-shrink-0 items-center justify-center opacity-80 transition hover:opacity-100"
                >
                  <Image src={partner.image} alt={partner.name} width={140} height={40} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Digital Transformation Partner */}
      <section className="relative bg-black text-white">
        <div className="mx-auto w-full px-4 py-20 md:px-8 md:py-24 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                Your End-to-End Digital Transformation Partner
              </h2>
            </div>
            <p className="max-w-xl text-white/80">
              We help businesses craft a clear and actionable digital roadmap that aligns with both short-term
              objectives and long-term vision
            </p>
          </div>

          {/* Digital Experience + Accordions */}
          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-14 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Digital Experience</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              <Accordion
                items={[
                  {
                    title: "DX Strategy",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                  {
                    title: "DX Design",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                  {
                    title: "DX Engineering",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                ]}
                defaultOpenIndex={0}
              />
              <Accordion
                items={[
                  {
                    title: "DX Intelligence",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                  {
                    title: "DX Marketing",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                  {
                    title: "DX Infrastructure",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                ]}
                defaultOpenIndex={null}
              />
            </div>
          </div>

          {/* Staff Augmentation + Accordions */}
          <div className="mt-28 grid gap-12 md:grid-cols-2 md:gap-14 lg:mt-32 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">Staff augmentation</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="grid gap-10 md:gap-12">
              <Accordion
                items={[
                  {
                    title: "Technical Excellence",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                  {
                    title: "Value-Based Pricing",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                  {
                    title: "Training",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                  },
                ]}
                defaultOpenIndex={null}
              />
            </div>
          </div>
        </div>
      </section>

      <IntermediateFrame />
      <OurCapabilities />
      <FlexiblePlatforms />
      <WhatWeBring />
      <SuccessStories />
      <Achievements />

      <BlogSection />
      <FAQSection />
      <RatingsSection />
    </main>
  )
}
