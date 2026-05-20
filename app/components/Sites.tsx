"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sites = () => {
     const pathname = usePathname();
     const relatedItems = [
    { label: 'ST. STEPHEN - MARATHON', href: '/components/churches/stephen' },
    { label: 'ST. PATRICK’S - WITHNEY PT', href: '/components/churches/patrick' },
    { label: 'OLPH - CINCINNATUS', href: '/components/churches/olph' },
  ];
  return (
    <>
    <div className="hidden lg:flex justify-center">
      <div className="absolute top-0 lg:top-[46vw] z-20">
        <button className="text-[#003629] bg-white font-bold px-6 py-3 lg:py-1 rounded-xl relative left-80">Related Sites</button>
          <div className="flex justify-center gap-4 mt-16 lg:mt-5 lg:bg-white lg:rounded-full py-6 px-8 lg:shadow-xl">
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
        <button className=" font-bold px-6 py-3 lg:py-1 rounded-xl text-2xl text-[#003629]">Related Sites</button>
          <div className="flex flex-col md:flex-row justify-center gap-14 md:gap-4 mt-5 sm:mt-7 py-6 px-1 md:px-2">
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

        </>
  )
}

export default Sites