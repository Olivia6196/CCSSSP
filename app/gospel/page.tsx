import Image from "next/image";
import Sites from "../components/Sites";
import GospelPage from "../components/livingGospel/GospelPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Living the Gospel – Faith Formation, Outreach & Sacraments",
  description:
    "Discover our vibrant Gospel Ministries – RCIA, Religious Education, Sacramental Preparation, Liturgical Ministries, and Outreach programs rooted in Catholic faith and service.",
  keywords: [
    "Gospel Ministries",
    "Catholic Faith Formation",
    "RCIA",
    "Religious Education",
    "Sacramental Preparation",
    "Liturgical Ministries",
    "Catholic Outreach",
    "Food Pantry",
    "St. Vincent de Paul",
     "Catholic Community of St. Stephen’s - St. Patrick’s Parish"
  ],
  openGraph: {
    title: "Living the Gospel – Faith in Action",
    description: "Living the Gospel through formation, service, and worship.",
    url: "https://www.ccsssp.com/gospel", //the actual url of the page
    images: [
      {
        url: "/images/gospel.png",
        width: 567,
        height: 382,
        alt: "Gospel Ministries",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ccsssp.com/gospel",
  },
};


const page = () => {
  return (
    <>
      <div className="relative lg:h-130 min-h-80 px-2 flex justify-center text-center items-center overflow-hidden mt-5 mb-16 md:mb-32 mx-4 sm:mx-7 bg-white rounded-3xl">
        <Image
          src="/images/living_the_gospel.png"
          alt="living gospel"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-3xl md:text-5xl font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Living the Gospel
          </h1>

          <p className="text-white/75 lg:w-lg font-semibold text-[1.12rem] leading-7 italic">
            "Go therefore and make disciples of all nations..."
          </p>
        </div>
      </div>
      <Sites />
      <GospelPage />
    </>
  );
};

export default page;
