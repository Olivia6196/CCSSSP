import { notFound } from "next/navigation";

import { getPost, getPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import Sites from "@/app/components/Sites";
import CommentsSection from "../CommentsSection";
import Form from "../Form";

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SingleNewsPage({ params }: Props) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date);

  const month = date.toLocaleString("default", {
    month: "short",
  });

  const day = date.getDate();

  return (
    <>
      <div className="relative lg:h-130 min-h-90 flex overflow-hidden mt-5 mb-16 md:mb-20 mx-3 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/annual_harvest.png"
          alt="Events"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        <div className="relative pl-4 sm:pl-10 lg:pl-20 z-10 max-w-3xl pt-12 md:pt-16">
          <button className="text-white px-5 py-2 rounded-lg bg-[#B52619]">
            Featured Event
          </button>
          <h1
            className="text-white text-3xl md:text-5xl font-semibold lg:leading-16 pb-2 pt-4 italic"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
             Upcoming Events/
             <br />
             Celebrations/Meetings
          </h1>

          <p className="text-white/75 lg:w-lg font-semibold text-[1.05rem] pr-2 leading-7 pb-6">
            Join us for an evening of fellowship, live music, and community
            fundraising as we celebrate the bountiful blessings of our parish
            family.
          </p>
        </div>
      </div>
      <Sites />
      <main className="max-w-4xl mx-4 sm:mx-10 lg:mx-20 my-10">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center w-[19vw] md:w-[5vw] gap-1 mt-2 bg-[#003629] border border-gray-300 rounded-full pt-3.5">
            <div className="text-center leading-tight">
              <p className="text-sm font-medium text-[#540505] uppercase bg-[#FFE088] pt-0.5 px-5 rounded-t-xl">
                {month}
              </p>
              <p className="text-lg font-semibold text-white pb-1 px-5">
                {day}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium underline">{post.title}</h2>
          </div>
        </div>

        <div className="text-gray-600 mb-5">
          Posted on {new Date(post.date).toDateString()}
        </div>

        <article
          className="
          prose prose-lg w-full overflow-x-hidden
             [&_img]:rounded-xl 
             [&_img]:shadow-xl 
             [&_img]:my-8 
             [&_img]:w-[50vw] 
             [&_img]:h-full
             [&_img]:object-cover 
             [&_img]:block
             [&_img]:transition-transform
             "
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </main>
      <CommentsSection comments={post.comments || []} />
      <Form />
      <div className="my-16 mx-3 sm:mx-10 lg:mx-20 bg-white relative md:right-[-65vw]">
        <Link
          href="/news"
          className="bg-transparent border border-gray-300 text-[#003629] px-9 py-3 rounded-full font-semibold shadow-2xl"
        >
          Back to News
        </Link>
      </div>
    </>
  );
}
