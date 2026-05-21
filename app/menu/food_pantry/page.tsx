import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative lg:h-screen min-h-90 flex justify-center text-center items-center overflow-hidden mt-5 mb-16 lg:mb-24 mx-4 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/food_pantry.png"
          alt="food pantry"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0e14135e]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-3xl md:text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Food Pantry
          </h1>

          <p className="text-white/75 lg:w-lg font-semibold text-[1.12rem] leading-7 italic px-1">
           “Extending Grace through every Breakfast”. 
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-28 mx-4 md:mx-10 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-6">Food Pantry</h2>
          <h3 className="font-medium text-xl pb-1">WP Ecumenical Food Pantry Hours:</h3>
          <p className="pb-5 leading-7 text-lg">Mon-Thurs and Sat, 10am-Noon.
            <br />
            Closed Fridays, Holidays, and when school is closed.
          </p>
          <h3 className="font-medium text-xl pb-1">Mobile Food Pantry:</h3>
          <p className="text-lg">2nd Weds. of each month at the WP Fairgrounds @ 9am</p>
        </div>
        <div>
            <Form />
        </div>
      </div>
    </>
  );
};

export default page;
