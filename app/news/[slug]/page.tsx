import { notFound } from "next/navigation"

import {
  getPost,
  getPosts,
} from "@/lib/posts"
import Image from "next/image"
import Link from "next/link"
import Sites from "@/app/components/Sites"
import Form from "@/app/components/Form"

const cleanSlug = (slug: string) =>
  decodeURIComponent(slug)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

export async function generateStaticParams() {
  const posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function SingleNewsPage({
  params,
}: Props) {
  const { slug } = await params

    const clean = cleanSlug(slug)

  const post = getPost(clean)

  if (!post) {
    notFound()
  }

   const date = new Date(post.date)

const month = date.toLocaleString("default", {
  month: "short",
})

const day = date.getDate()
  return (
    <>
    <div className="relative lg:h-130 min-h-120 flex overflow-hidden mt-5 mb-16 md:mb-20 mx-3 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/annual_harvest.png"
          alt="Events"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        <div className="relative pl-4 sm:pl-10 md:pl-20 z-10 max-w-3xl pt-12 md:pt-16">
          <button className="text-white px-5 py-2 rounded-lg bg-[#B52619]">Featured Event</button>
          <h1
            className="text-white text-5xl font-semibold lg:leading-14 pb-2 pt-4 lg:w-[40vw] italic"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Annual Parish Harvest Gala
          </h1>

          <p className="text-white/75 lg:w-lg font-semibold text-[1.05rem] leading-7 pb-6">
            Join us for an evening of fellowship, live music, and community
            fundraising as we celebrate the bountiful blessings of our parish
            family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-[50vw] sm:w-full">
            <Link
               href="/contact"
               className="bg-white text-[#0a3f13] px-9 py-3 rounded-full font-semibold"
               >
                Register Now
            </Link>
            <Link
               href="/news"
               className="bg-transparent border border-white text-white px-9 py-3 rounded-full font-semibold"
               >
                Event Details
            </Link>
          </div>
        </div>
      </div>
      <Sites />

    <main className="max-w-4xl mx-auto px-6 py-10">
      
           <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-1 mt-2 bg-[#003629] border border-gray-300 rounded-full pt-3.5">
                    <div className="text-center leading-tight">
                      <p className="text-sm font-medium text-[#540505] uppercase bg-[#FFE088] pt-0.5 px-5 rounded-t-xl">{month}</p>
                      <p className="text-lg font-semibold text-white pb-1 px-5">{day}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium underline">
                      {post.title}
                    </h2>
                  </div>
                </div>

      <div className="text-gray-600 mb-10">
        Posted on{" "}
        {new Date(post.date).toDateString()}
      </div>

      {/* FULL CONTENT */}

      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </main>
    <Form />
    </>
  )
}