import Image from "next/image"
import RelatedSite from "../../RelatedSite"
import Link from "next/link"
import Staff from "../../Staff"

const page = () => {
  return (
    <>
    <div className="relative lg:h-screen min-h-100 flex justify-center text-center items-center overflow-hidden mt-5 mb-16 md:mb-24 mx-4 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/st_patrick.png"
          alt="st. Patrick"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0e14133f]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-3xl  md:text-[3.5rem] font-semibold leading-10 md:leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            St. Patrick’s Withney PT
          </h1>

          <p className="text-white/85 font-semibold text-[1.12rem] leading-7 text-center px-2 md:px-0">
           Saint Patrick’s Church 59 Keibel Rd Whitney Point, NY Parish office:
           <br />
           P.O. Box 711 59 Keibel Rd Whitney Point, NY 
           <br />
           Office Hours: Monday — Thursday, 9:00 AM — 12:00 PM
           <br />
           Tel: (607) 692-3911
          </p>
        </div>
      </div>
      <RelatedSite />
    <Staff />
    </>
  )
}

export default page
