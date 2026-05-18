import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-7 bg-white rounded-3xl">
        <Image
          src="/images/hero_img6.png"
          alt="contact"
          fill
          className="object-cover"
          priority
          quality={90}
        />
         <div className="absolute inset-0 bg-[#0e141386]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Contact
          </h1>

          <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">
            “Connect with our Faith Family”
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex justify-between mx-20 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-4">Contact</h2>
         <ul className="list-disc ml-7 text-[1.2rem] leading-8 text-black/90">
            <li><span className="font-medium leading-8">Phone: </span>607-692-3911</li>
            <li className="underline"><span className="font-medium leading-8 no-underline">Email: </span>Mary Wied - Secretary
            <br />
            Jason Somers - Webmaster
            </li>
            <li><span className="font-medium leading-8">Office Hours: </span>
            <br />
            Monday - Thursday
            <br />
            9:00 am -- 12:00 pm
            </li>
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
