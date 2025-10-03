import { Metadata } from "next"
import { Button } from "../components/Button/Button"
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
export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-20 pb-16 md:pb-24">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">
                Liferay Services
              </div>
              <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">Performance Tuning</span>
              </h1>
            </div>
            <p className="max-w-xl text-sm text-white/80 sm:text-base md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Cache optimization
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Database tuning
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Server configuration
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Code review
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Code profiling
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Server configuration
            </Button>
          </div>
        </div>
      </section>

      {/* Liferay Performance Tuning - Features Grid */}
      <section className="mt-24 bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Liferay Performance Tuning</h2>
          <p className="mt-6 max-w-5xl text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue.
          </p>

          {/* Row 1: 3 columns with vertical dividers only */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
          </div>

          {/* Row 2: horizontal line on top of the entire row; vertical dividers only between 1-2 and 2-3; last block (#6) has only the left divider */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
