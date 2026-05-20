import Image from "next/image"
import RelatedSite from "../../RelatedSite"
import Staff from "../../Staff"

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
    </>
  )
}

export default page
