"use client"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Schedules = () => {
    const pathname = usePathname();
         const relatedItems = [
        { label: 'ST. STEPHEN - MARATHON', href: '/components/churches/stephen' },
        { label: 'ST. PATRICK’S - WITHNEY PT', href: '/components/churches/patrick' },
        { label: 'OLPH - CINCINNATUS', href: '/components/churches/olph' },
      ];
  return (
    <>
    <div className="relative lg:h-[35vw] min-h-100 flex items-center overflow-hidden pl-8 md:pl-20 mt-5 mb-20 lg:mb-32 mx-3 sm:mx-7 bg-white rounded-3xl">
                  <Image
                    src="/images/schedules.png"
                    alt="schedules"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
    
                  <div className="relative z-10 max-w-3xl">
                    <h1 className="text-[#FFE088] text-sm pb-4 font-semibold"
                    >
                      LITURGICAL SERVICES
                    </h1>
                    <h2
                      className="text-white/75 max-w-3xl text-3xl sm:text-5xl font-semibold md:leading-16 pb-3 sm:pb-2 italic"
                     style={{ fontFamily: "var(--font-newsreader)" }}
                    >
                       Mass & Sacramental Schedules
                    </h2>
                    <div className="text-white/55 font-semibold border-l-3 border-[#CBA72F] ">
                    <p className="italic text-[1.14rem] pl-6 leading-8"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                    >"For where two or three are gathered together in my name, there am 
                        <br />
                        I in the midst of them."</p>
                        
                    <p className="pt-4 font-normal">— Matthew 18:20</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
      <div className="relative lg:absolute top-0 lg:top-[43vw] z-20">
        <button className="bg-[#003629] text-white/85 lg:text-[#003629] lg:bg-white font-bold px-6 py-1 rounded-xl relative left-80">Related Sites</button>
          <div className="flex justify-center gap-4 mt-5 bg-white rounded-full py-6 px-8 shadow-xl">
             {relatedItems.map((item)=>
             <div key={item.label}>
              <Link
                href={item.href}
                className={` text-[0.9rem] py-3 px-6 rounded-full text-white/85 font-medium transition-colors ${pathname === item.href ? 'bg-[#003629]' : 'bg-[#540505]'}`}
              >
                 {item.label}
              </Link>
             </div>
            )}
          </div>
        </div>
        </div>

          <div className="flex lg:hidden justify-center text-center mx-3">
      <div className="">
        <button className=" font-bold px-6 py-3 lg:py-1 rounded-xl text-2xl ">Related Sites</button>
          <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-4 mt-7 sm:mt-10 py-6 px-1 md:px-2">
             {relatedItems.map((item)=>
             <div key={item.label}>
              <Link
                href={item.href}
                className={` text-[0.9rem] py-5 md:px-5 px-16 rounded-full text-white/85 font-medium transition-colors ${pathname === item.href ? 'bg-[#003629]' : 'bg-[#540505]'}`}
              >
                 {item.label}
              </Link>
             </div>
            )}
          </div>
        </div>
        </div>
        
        <div className="mt-20 lg:mt-0 mx-4 sm:mx-10 md:mx-20 ">
        <h2 className="text-[2rem] font-bold pb-5 text-center text-black/80 ">Schedules</h2>
        <p className="text-lg text-center leading-9 md:leading-7 font-medium text-black/70">
            Mass Schedules
            <br />
            Saturday Vigil 5:00 PM – St. Stephen
            <br />
            Sunday 8:30 AM – St. Patrick
            <br />
            11:00 AM – Our Lady of Perpetual Help
            <br />
            Monday 6:00 PM – St. Patrick
            <br />
            Tuesday 10:00 AM – St. Patrick
            <br />
            First Thursday Weekday Mass 11:00 AM – Our Lady of Perpetual Help
            <br />
            Friday Mass & Bible Study 10:00 AM – St. Patrick
        </p>
          <div className="flex justify-center mt-12 mb-24">
            <Image 
            src="/images/schedule_img.png"
            alt="schedules"
            width={1034}
            height={300}
            className="rounded-3xl"
            />
          </div>
          </div>
                </>
  )
}

export default Schedules;