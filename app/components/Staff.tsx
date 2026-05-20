import Link from "next/link"

const Staff = () => {
  return (
    <div className="text-justify mx-4 sm:mx-10 lg:mx-20 mb-16 mt-16 lg:mt-0">
          <h2 className="text-[2rem] font-semibold pb-4">Parish Staff</h2>
         <ul className="list-disc list-inside md:pl-5 text-[1.2rem] leading-8 text-black/90 mb-12">
            <li>Administrator – Rev. James Serowik</li>
            <li>Chairperson – Shelley Warnow</li>
            <li>Vice-Chair – Dan Burke</li>
            <li>Trustees – Kathy Cusick, Ron Orzel</li>
            <li>Secretary – Sue Stevens</li>
            <li>Parish Business Manager – Mary Weid</li>
            <li>Director of Faith Formation – Sherry Dee</li>
            <li>Ministry Coordinator – Peg Orzel</li>
            <li>Church Organist/Music Director – Jennifer Austin</li>
         </ul>
         <Link
            href='https://www.figma.com/proto/PjA6rRrCgOgw2VkltKTjI9/CCSSSP--Copy'
            className="group relative overflow-hidden border-b text-lg shadow hover:text-white hover:border-0 px-4 py-2 rounded-full transition-all duration-300"
         >
            <span className="absolute bg-[#003629] rounded-lg inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            <span className="relative items-center justify-center gap-2 z-10">
              View Map
            </span>
         </Link>
        </div>
  )
}

export default Staff