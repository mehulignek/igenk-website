import Image from "next/image"

type BlogItem = {
  id: string
  title: string
  excerpt: string
  image: string
}

import posts from "../../data/blogs.json"

export default function BlogSection() {
  const list = posts as BlogItem[]
  const main = list[0]
  const side = list.slice(1, 4)

  return (
    <section className="bg-white text-black">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Explore What’s Shaping Digital Today</h2>
          <p className="max-w-xl text-sm text-gray-700 md:justify-self-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
          {/* Left: big image + title + subtitle + horizontal line */}
          <div>
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <Image src={main?.image || "/images/blog.svg"} alt={main?.title || "Blog Post"} width={1024} height={576} className="h-auto w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl md:text-2xl font-semibold">{main?.title || "Blog Post"}</h3>
            <p className="mt-2 text-sm text-gray-700">{main?.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
            <div className="mt-6 border-t border-gray-300" />
          </div>

          {/* Right: three small cards */}
          <div className="space-y-8">
            {side.map((item) => (
              <div key={item.id} className="grid grid-cols-[120px_1fr] items-center gap-4">
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <Image src={item.image} alt={item.title} width={240} height={160} className="h-24 w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-700 line-clamp-2">{item.excerpt}</p>
                  <div className="mt-4 border-t border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}