import Link from "next/link";

const RelatedSite = () => {
     const relatedItems = [
    { label: 'ST. STEPHEN - MARATHON', href: '/stephen' },
    { label: 'ST. PATRICK’S - WITHNEY PT', href: '/patrick' },
    { label: 'OLPH - CINCINNATUS', href: '/olph' },
  ];
  return (
    <div className="flex justify-center">
      <div className="absolute top-[55vw] z-20">
        <button className="text-[#003629] bg-white font-bold px-6 py-1 rounded-xl relative left-80">Related Sites</button>
          <div className="flex justify-center gap-4 mt-5 bg-white rounded-full py-6 px-8 shadow-xl">
             {relatedItems.map((item)=>
             <div key={item.label} className="bg-[#540505] text-white/85 py-3 px-6 rounded-full">
              <Link
                href={item.href}
                className="text-[0.9rem] font-medium"
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