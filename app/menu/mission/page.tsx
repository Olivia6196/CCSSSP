import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-7 bg-white rounded-3xl">
        <Image
          src="/images/hero_img4.png"
          alt="mission statement"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0e14138c]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Our Mission Statement
          </h1>

          <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">
            “Leading Souls to Christ through Love and Service.”
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex justify-center gap-28 mx-10 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-6">Our Mission Statement</h2>
          <p className="leading-7 w-[35vw] text-[1.15rem]  text-black/90 pb-3">
            We are a Roman Catholic Community of faith, welcoming the strength
            found in diversity. 
          </p>
          <p className="leading-7 w-[35vw] text-[1.15rem] pb-3  text-black/90">
           We are committed to using our time, talent, and
            treasure in proclaiming the Kingdom of God through prayer,
            fellowship, and service.
          </p>
          <p className="leading-7 w-[35vw] text-[1.15rem]  text-black/90">
            We experience our unity at the Eucharistic
            Table of the Lord, and our direction from the Word of God.
          </p>
        </div>
        <div>
            <Form />
        </div>
      </div>
    </>
  );
};

export default page;
