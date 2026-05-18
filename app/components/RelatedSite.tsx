"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const RelatedSite = () => {
     const pathname = usePathname();
     const relatedItems = [
    { label: 'ST. STEPHEN - MARATHON', href: '/components/churches/stephen' },
    { label: 'ST. PATRICK’S - WITHNEY PT', href: '/components/churches/patrick' },
    { label: 'OLPH - CINCINNATUS', href: '/components/churches/olph' },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="relative lg:absolute top-0 lg:top-[55vw] z-20">
        <button className="bg-[#003629] text-white/85 lg:text-[#003629] lg:bg-white font-bold px-6 py-3 lg:py-1 rounded-xl relative left-80">Related Sites</button>
          <div className="flex justify-center gap-4 mt-16 lg:mt-5 lg:bg-white lg:rounded-full py-6 px-8 lg:shadow-xl">
             {relatedItems.map((item)=>
             <div key={item.label}>
              <Link
                href={item.href}
                className={` text-[0.9rem] py-10 lg:py-3 px-6 rounded-full text-white/85 font-medium transition-colors ${pathname === item.href ? 'bg-[#003629]' : 'bg-[#540505]'}`}
              >
                 {item.label}
              </Link>
             </div>
            )}
          </div>
        </div>
        </div>
  )
}

export default RelatedSite