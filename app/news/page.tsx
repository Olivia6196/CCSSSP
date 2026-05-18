import Image from "next/image";
import Link from "next/link";
import RelatedSite from "../components/RelatedSite";

const page = () => {
  return (
    <>
      <div className="relative h-screen min-h-150 flex overflow-hidden mt-5 mb-40 mx-7 bg-white rounded-3xl">
        <Image
          src="/images/annual_harvest.png"
          alt="Events"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        <div className="relative pl-20 z-10 max-w-3xl pt-28">
          <button className="text-white px-5 py-3 rounded-lg bg-[#B52619]">Featured Event</button>
          <h1
            className="text-white text-5xl font-semibold leading-16 pb-2 pt-6 w-[40vw] italic"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Annual Parish Harvest Gala
          </h1>

          <p className="text-white/75 w-lg font-semibold text-[1.05rem] leading-7 pb-8">
            Join us for an evening of fellowship, live music, and community
            fundraising as we celebrate the bountiful blessings of our parish
            family.
          </p>
          <div className="flex">
            <Link
               href="/contact"
               className="bg-white text-[#0a3f13] px-9 py-3 rounded-full font-semibold"
               >
                Register Now
            </Link>
            <Link
               href="/news"
               className="bg-transparent border border-white text-white px-9 py-3 rounded-full font-semibold ml-4"
               >
                Event Details
            </Link>
          </div>
        </div>
      </div>
      <RelatedSite />
    </>
  );
};

export default page;
