import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative lg:h-screen min-h-100 flex justify-center text-center items-center overflow-hidden mt-5 mb-16 lg:mb-24 mx-4 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/service_schedule.png"
          alt="service schedule"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-3xl md:text-[3.5rem] font-semibold lg:leading-16 pb-5 lg:pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Service Schedule
          </h1>

          <p className="text-white/75 lg:w-lg font-semibold text-[1.12rem] leading-7 px-1 italic">
            “Join us in Worship and Fellowship”
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex flex-col lg:flex-row justify-center gap-10 sm:gap-16 lg:gap-28 mx-4 md:mx-10 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-4">Service Schedule</h2>
         <ul className="list-disc md:list-inside md:pl-5 ml-4 md:ml-0 text-[1.2rem] leading-8 text-black/90">
            <li>Saturday Vigil: 5:00PM @ St. Stephen's</li>
            <li>Sunday: 8:30am @ St. Patrick's 11:00am @ OLPH</li>
            <li>Monday: 6:00pm @ St. Stephen's</li>
            <li>Tuesday: 9:00am @ St. Patrick's</li>
            <li>First Thursday Weekday Mass: 11:00am @ OLPH</li>
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
