import Image from "next/image";
import RelatedSite from "../../RelatedSite";
import Staff from "../../Staff";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="relative lg:h-screen min-h-100 flex justify-center text-center items-center overflow-hidden mt-5 lg:mb-24 mb-16 mx-4 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/st_stephen.png"
          alt="st. Stephen"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0e14131f]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-3xl sm:text-[3.5rem] font-semibold md:leading-16 pb-3 md:pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            St. Stephen - Marathon
          </h1>

          <p className="text-white/75 md:w-lg font-semibold text-[1.12rem] leading-7 italic px-2 sm:px-0">
            Saint Stephen’s Church Academy St Marathon, NY
          </p>
        </div>
      </div>
      <RelatedSite />
      <Staff />
      <div className="mx-4 sm:mx-10 lg:mx-20 mb-16">
       <Link
            href="https://www.google.com/maps/place/St.+Stephen's+Church/@42.444045,-76.035519,14z/data=!4m6!3m5!1s0x89da5d297001ee85:0x3f351b97a0ca8b38!8m2!3d42.437922!4d-76.0378536!16s%2Fg%2F11tf6cl76r?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="group relative overflow-hidden border-b text-lg shadow hover:text-white hover:border-0 px-4 py-2 rounded-full transition-all duration-300"
         >
            <span className="absolute bg-[#003629] rounded-lg inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            <span className="relative items-center justify-center gap-2 z-10">
              View Map
            </span>
         </Link>
         </div>
    </>
  );
};

export default page;
