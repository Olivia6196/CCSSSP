import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    const links =[
        {
            label:"3 Minute Retreat",
            href:"https://www.loyolapress.com/3-minute-retreats-daily-online-prayer/"
        },
        {
            label:"Catholic News",
            href:"https://zenit.org/?l=english"
        },
        {
            label:"Catholic Online",
            href:"https://www.catholic.org/"
        },
        {
            label:"Diocese Of Syracuse",
            href:"https://syracusediocese.org/"
        },
        {
            label:"Lord, Teach Me to Pray",
            href:"https://cptryon.org/prayer/"
        },
        {
            label:"MassTimes.org",
            href:"https://masstimes.org/"
        },
        {
            label:"National Conference of Bishops",
            href:"https://dukcapil.kemendagri.com/"
        },
        {
            label:"New America Bible",
            href:"https://www.usccb.org/offices/new-american-bible/books-bible"
        },
        {
            label:"Saint of the Day",
            href:"https://www.catholic.org/saints/"
        },
        {
            label:"Today's Reading",
            href:"https://bible.usccb.org/"
        },
    ]
  return (
    <>
      <div className="relative lg:h-screen min-h-90 flex justify-center text-center items-center overflow-hidden mt-5 lg:mb-24 mb-16 mx-4 md:mx-7 bg-white rounded-3xl">
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
            className="text-white text-3xl md:text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Related Links
          </h1>

          <p className="text-white/75 lg:w-lg font-semibold text-[1.12rem] leading-7 italic">
            “Connect with our Church Family Today”.
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-0 mx-4 sm:mx-10 lg:mx-24 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-4">Links</h2>
         <ul className="list-disc md:list-inside pl-2 ml-5 md:ml-0 text-[1.2rem] leading-8 text-black/90">
         {links.map((item)=>
           <li key={item.label}>
            <Link
             href={item.href}
             className="border-b pb-0.5"
             target="_blank"
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
