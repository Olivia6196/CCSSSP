import Image from "next/image";
import Link from "next/link";
import Sites from "../components/Sites";
import { getPosts } from "@/lib/posts";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const POSTS_PER_PAGE = 25;

type Props = Promise<{
  page?: string;
}>;

const NewsPage = async ({ searchParams }: { searchParams: Props }) => {
  const currentPage = Number((await searchParams).page ?? 1);

  const posts = getPosts();

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const paginatedPosts = posts.slice(start, end);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;

  return (
    <>
      <div className="relative lg:h-130 min-h-80 flex overflow-hidden mt-5 mb-16 md:mb-20 mx-3 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/annual_harvest.png"
          alt="Events"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        <div className="relative pl-4 sm:pl-10 md:pl-20 z-10 max-w-3xl pt-12 md:pt-16">
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

          <p className="text-white/75 lg:w-lg font-semibold text-[1.05rem] leading-7 pb-6">
            Join us for an evening of fellowship, live music, and community
            fundraising as we celebrate the bountiful blessings of our parish
            family.
          </p>
        </div>
      </div>
      <Sites />
      <main className="md:w-[80vw] mx-4 sm:mx-10 lg:mx-20 my-10">
        <h1 className="text-3xl font-bold mb-6">News & Events</h1>

        {/* POSTS */}
        <div className="space-y-8 ">
          {paginatedPosts.map((post) => {
            const date = new Date(post.date);

            const month = date.toLocaleString("default", {
              month: "short",
            });

            const day = date.getDate();
            return (
              <article key={post.id}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex flex-col items-center w-[19vw] md:w-[5vw] gap-1 mt-2 bg-[#003629] border border-gray-300 rounded-full pt-3.5">
                    <div className="text-center leading-tight">
                      <p className="text-sm font-medium text-[#540505] uppercase bg-[#FFE088] pt-0.5 px-5 rounded-t-xl">{month}</p>
                      <p className="text-lg font-semibold text-white pb-1 px-5">{day}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium underline hover:text-[#cc2023] transition-colors">
                      {post.title}
                    </h2>
                  </div>
                </div>

                <div className="flex gap-1 items-center mt-2 text-gray-600">
                  <p>Posted by {post.author} | </p>
                  <p className="border-b pb-0.5 flex items-center">
                    No Comments
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </p>
                </div>

                <div
                  className="mt-1 text-lg leading-8 overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />

                <Link
                  href={`/news/${post.id}`}
                  className="inline-block mt-2 underline text-lg"
                >
                  Continue...
                </Link>
              </article>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between mt-16 border-t border-[#bbbab6] pt-6">
          {/* PREVIOUS */}
          {hasPrev ? (
            <Link
              href={`/news?page=${currentPage - 1}`}
             className="text-white bg-[#003629] rounded-full border border-white py-1.5 px-5 font-medium flex items-center gap-1 shadow-[0_0_6px_#ffdf88bb]"
            >
              Previous
               <FaArrowLeft />
            </Link>
          ) : (
            <div />
          )}

          {/* PAGE INFO */}
          <p className="text-[#003629] font-medium">
            Page {currentPage} of {totalPages}
          </p>

          {/* NEXT */}
          {hasNext ? (
            <Link
              href={`/news?page=${currentPage + 1}`}
              className="text-[#003629] bg-white rounded-full border border-[#003629] py-1 px-6 font-medium flex items-center gap-1 shadow-[0_0_6px_#003629a1]"
            >
              Next
              <FaArrowRight />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </>
  );
};

export default NewsPage;
