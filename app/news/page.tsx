import Image from "next/image";
import Link from "next/link";
import Sites from "../components/Sites";
import { newsEvents } from "@/lib/newsData";

const page = () => {
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
      <div className="mx-4 sm:mx-10 lg:mx-20 mt-16 lg:mt-0">
        <h2 className="font-bold text-4xl  ">News & Events</h2>
      {newsEvents.map((post) => (
        <div key={post.id}>
          <h2 className="">{post.title}</h2>
          <p className="">Posted By {post.author}</p>
          <p className="">{post.excerpt}</p>
          <Link href={post.url} className="">
            Continue
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default page;
