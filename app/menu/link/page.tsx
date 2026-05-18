import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    const links =[
        {
            label:"3 Minute Retreat",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.loyolapress.com%2F3-minute-retreats-daily-online-prayer.htm"
        },
        {
            label:"Catholic News",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.zenit.org%2Findex.php%3Fl%3Denglish"
        },
        {
            label:"Catholic Online",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.catholic.org%2F"
        },
        {
            label:"Diocese Of Syracuse",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.syrdio.org%2F"
        },
        {
            label:"Lord, Teach Me to Pray",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.cptryon.org%2Fprayer%2F"
        },
        {
            label:"MassTimes.org",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.masstimes.org%2F"
        },
        {
            label:"National Conference of Bishops",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.nccbuscc.org%2F"
        },
        {
            label:"New America Bible",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.nccbuscc.org%2Fnab%2Fbible"
        },
        {
            label:"Saint of the Day",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.americancatholic.org%2FFeatures%2FSaintofDay%2F"
        },
        {
            label:"Today's Reading",
            href:"https://www.figma.com/exit?url=http%3A%2F%2Fwww.usccb.org%2Fnab%2Ftoday.shtml"
        },
    ]
  return (
    <>
      <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-7 bg-white rounded-3xl">
        <Image
          src="/images/hero_img2.png"
          alt="Links"
          fill
          className="object-cover"
          priority
          quality={90}
        />
         <div className="absolute inset-0 bg-[#0e14137c]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Related Links
          </h1>

          <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">
            “Connect with our Church Family Today”.
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex justify-between mx-24 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-4">Links</h2>
         <ul className="list-disc list-inside pl-2 text-[1.2rem] leading-8 text-black/90">
         {links.map((item)=>
           <li key={item.label}>
            <Link
             href={item.href}
             className="border-b pb-0.5"
            >
                {item.label}
            </Link>
            </li>
        )}
         </ul>
        </div>
        <div>
            <Form />
        </div>
      </div>
    </>
  );
};

export default page;
