import Image from "next/image"
import RelatedSite from "../../RelatedSite"
import Link from "next/link"
import Staff from "../../Staff"

const page = () => {
  return (
    <>
    <div className="relative lg:h-screen min-h-100 flex justify-center text-center items-center overflow-hidden mt-5 mb-16 lg:mb-24 mx-4 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/OLPH.png"
          alt="OLPH"
          fill
          className="object-cover"
          priority
          quality={90}
        />
         <div className="absolute inset-0 bg-[#fbfcfc56]" />
         
        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-[#003629] text-3xl md:text-[3.5rem] font-semibold lg:leading-16 lg:pb-2 p-4"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            OLPH - Cincinnatus
          </h1>

          <p className="text-black font-semibold text-[1.12rem] leading-7 text-center">
           Our Lady of Perpetual Help,
           <br />
          2708 Lower Cincinnatus Road Cincinnatus, NY 13040
          </p>
        </div>
      </div>
      <RelatedSite />
       <div className="text-justify mx-4 sm:mx-10 lg:mx-20 mb-16 mt-16 lg:mt-0">
          <h2 className="text-[2rem] font-semibold pb-4">Parish Staff</h2>
         <ul className="list-disc list-inside md:pl-5 text-[1.2rem] leading-8 text-black/90 mb-12">
            <li>Administrator – Rev. James Serowik</li>
            <li>Parish Council President – Linda Crowley</li>
            <li>Vice-President – Terri Fedele</li>
            <li>Secretary – Lisa Hol</li>
            <li>Parish Business Manager – Mary Weid</li>
            <li>Trustees – Betty Carter, Pat Rice</li>
            <li>Pastoral Care Lay Minister – Linda Crowley</li>
         </ul>
         <Link
            href='https://www.figma.com/proto/PjA6rRrCgOgw2VkltKTjI9/CCSSSP--Copy'
            className="group relative overflow-hidden border-b text-lg shadow hover:text-white px-4 py-2 rounded-full transition-all duration-300"
         >
            <span className="absolute bg-[#003629] rounded-full inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            <span className="relative items-center justify-center gap-2 z-10">
              View Map
            </span>
         </Link>
         <p className="mt-12">
            Download the OLPH Weekly Bulletin
            <Link
            href=""
            className="border-b pb-0.5 font-medium ml-2"
            >
                HERE
            </Link>
         </p>
        </div>
    </>
  )
}

export default page
