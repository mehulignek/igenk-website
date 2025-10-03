import Image from "next/image"
import Link from "next/link"

export default function CareerPage() {
  const perks = Array.from({ length: 20 }).map((_, i) => ({
    title:
      [
        "5 Days Working",
        "Festival Celebration",
        "Rewards & Benefits",
        "Skills Improvement",
      ][i % 4],
    icon:
      [
        "/images/career/5%20Days%20Working.svg",
        "/images/career/Festival%20Celebration.svg",
        "/images/career/Rewards%20%26%20Benefits.svg",
        "/images/career/Skills%20Improvement.svg",
      ][i % 4],
  }))

  const jobs = [
    {
      id: "sales-head",
      title: "Sales Head – IT Services & Consulting",
      tags: ["Full‑time", "2‑5y", "Ahmedabad"],
    },
    { id: "content-writer", title: "Technical Content Writer", tags: ["Full‑time", "0‑2y", "Remote"] },
    { id: "react-dev", title: "ReactJS Developer", tags: ["Full‑time", "2‑4y", "Ahmedabad"] },
    { id: "qa-engineer", title: "QA Engineer", tags: ["Full‑time", "1‑3y", "Remote"] },
  ]

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative text-white">
        <div className="absolute inset-0 -z-10 bg-[url('/images/career_bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Career</div>
              <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-[#0E7BF8] via-white to-[#00979E] bg-clip-text text-transparent">
                  Grow With Us,
                  <br />
                  Shine With Us
                </span>
              </h1>
            </div>
            <p className="max-w-xl text-sm text-white/80 md:justify-self-end">
              We’re a growth culture that values creativity, collaboration, and grit. Join us to build products and
              experiences that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Perks & Benefits That Go Beyond The Paycheck</h2>
            <p className="max-w-xl text-sm text-white/80 md:justify-self-end">
              We invest in experiences, opportunities, and support systems that help you thrive professionally and
              personally.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
            {perks.map((p, idx) => (
              <div key={`${p.title}-${idx}`} className="text-center">
                <Image src={p.icon || ""} alt={p.title || ""} width={56} height={56} className="mx-auto h-14 w-14" />
                <div className="mt-3 text-sm font-semibold">{p.title || ""}</div>
                <div className="mt-6 border-t border-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Your Next Opportunity Awaits</h2>
            <p className="max-w-xl text-sm text-gray-700 md:justify-self-end">
              Be part of a culture that values creativity, collaboration, and growth.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="grid items-center gap-4 grid-cols-[1fr_auto]">
                  <div>
                    <div className="text-base md:text-lg font-semibold">{job.title}</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                      {job.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-gray-300 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href="#" className="rounded-full px-3 py-2 text-sm border border-gray-300 hover:bg-gray-100">
                      View Details
                    </Link>
                    <Link href="#" className="inline-block rounded-full p-[2px] bg-gradient-to-r from-black via-black to-[#00979E]">
                      <span className="block rounded-full bg-black px-4 py-2 text-sm text-white">Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}