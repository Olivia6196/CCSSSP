import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-7 bg-white rounded-3xl">
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
            className="text-white text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Service Schedule
          </h1>

          <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">
            “Join us in Worship and Fellowship”
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex justify-center gap-28 mx-10 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-4">Service Schedule</h2>
         <ul className="list-disc list-inside pl-5 text-[1.2rem] leading-8 text-black/90">
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
