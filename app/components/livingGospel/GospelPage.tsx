"use client";
import Image from "next/image";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";
import { FaPeopleRoof, FaRegFaceGrinBeamSweat } from "react-icons/fa6";
import { GiHamburger, GiKnifeFork } from "react-icons/gi";
import {
  MdOutlineLibraryMusic,
  MdOutlineRecordVoiceOver,
} from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import Serves from "./Serves";
import { TypeAnimation } from "react-type-animation";


const GospelPage = () => {
  const faithFormation = [
    {
      title: "RCIA",
      description:
        "The Rite of Christian Initiation for Adults is the path for those seeking to join the Catholic faith.",
      subtitle: "Learn More",
    },
    {
      title: "Religious Ed",
      description:
        "Nurturing the faith of our children from Pre-K through High School with engaging catechesis.",
      subtitle: "Resgister Now",
    },
  ];

  const outreachItems = [
    {
      title: "Food Pantry Ministry",
      description: "Serving over 200 families weekly.",
      icon: GiHamburger,
    },
    {
      title: "St. Vincent de Paul ",
      description: "Direct emergency assistance and home visits.",
      icon: FaPeopleRoof,
    },
  ];

  const sacramentalPrep = [
    { label: "Baptism" },
    { label: "Confirmation" },
    { label: "First Eucharist" },
    { label: "Marriage" },
  ];

  const liturgicalMinistries = [
    {
      icon: MdOutlineRecordVoiceOver,
      title: "Lector",
      desc: "Proclaim the Word",
    },
    {
      icon: GiKnifeFork,
      title: "EMHC",
      desc: "Minister of Eucharist",
    },
    {
      icon: FaRegFaceGrinBeamSweat,
      title: "Altar Servers",
      desc: "Youth Service",
    },
    {
      icon: MdOutlineLibraryMusic,
      title: "Music",
      desc: "Choir & Cantors",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white font-sans mx-3 sm:mx-10 lg:mx-16">
        <div className=" text-[#003629] border-l-4 border-[#CBA72F] pl-5 mb-5 ml-4 mt-14">
          <TypeAnimation
          sequence={[
            `"As each has received a gift, use it to serve one another, as good stewards of God's varied grace."`,
            2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-semibold py-5"
          style={{ fontFamily: "var(--font-newsreader)" }}
          />
          <p className="text-[#B52619] font-medium pb-4">— 1 Peter 4:10</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 ">
          <div className="flex flex-col lg:flex-row gap-13">
            <div className=" md:border border-gray-300 py-8 md:pt-10 md:px-10 lg:h-135 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <PiBookOpenText className="text-[#003629] text-3xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#003629]">
                  Faith Formation
                </h2>
              </div>
              <p className=" pb-6 lg:w-[50vw] leading-8 text-xl font-medium text-black/55">
                From our youngest disciples to those seeking to enter the
                Church, we offer comprehensive programs that nourish the mind
                and spirit at every stage of the journey.
              </p>

              <div className="flex flex-col-reverse md:flex-row gap-6">
                {faithFormation.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-[#c0c9c377] hover:bg-white p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-[#C8102E] font-semibold mb-2 text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg lg:w-[20vw]">
                      {item.description}
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center gap-1 mt-4 text-[#003629]"
                    >
                      {item.subtitle}
                      <FaArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-[#003629] text-white/70 mb-16 lg:mb-0 p-8 lg:p-9 lg:pt-16 rounded-lg lg:rounded-t-2xl lg:rounded-br-sm lg:h-[43vw] lg:w-[27vw]">
                <div className="flex flex-col gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <FaHandHoldingHeart className="text-[#FFE088] text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold pb-5">
                    Outreach & Social Justice
                  </h2>
                  <p className="pb-4">
                    Putting our faith into action through service to the
                    vulnerable in our community and beyond.
                  </p>
                </div>

                <div className="space-y-4">
                  {outreachItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 border-b border-white/20 pb-3"
                    >
                      <div className="w-10 h-10 flex justify-center mt-1">
                        <item.icon className="text-[#FFE088] text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className=" text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-0 flex flex-col lg:flex-row items-center gap-8 lg:border border-gray-300 rounded-l-xl rounded-br-xl rounded-tr-sm">
            <div className="lg:col-span-7">
              <Image
                src="/images/gospel.png"
                alt="Person receiving blessing during sacrament"
                width={567}
                height={382.38}
              />
            </div>

            <div>
              <div>
                <div className="flex items-center gap-1 mb-5 text-center pt-5">
                  <BsStars className="text-3xl text-[#003629]" />
                  <h2 className="text-2xl md:text-3xl font-medium text-[#003629]">
                    Sacramental Preparation
                  </h2>
                </div>
                <p className="text-lg font-medium text-black/55 pb-6 leading-7 md:w-xl">
                  The Sacraments are the visible signs of God's invisible grace.
                  We provide prayerful preparation for Baptism, First
                  Reconciliation, First Eucharist, Confirmation, and Holy
                  Matrimony.
                </p>

                <div className="grid grid-cols-2 md:flex flex-wrap gap-6 mb-6">
                  {sacramentalPrep.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 py-1.5 px-5 rounded-lg text-center"
                    >
                      <p className="text-[#003629] md:font-medium md:text-lg mb-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/schedules"
                  className="text-[#B52619] text-lg pb-4 font-medium flex items-center gap-1"
                >
                  View Preparation Schedule
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#003629] text-center mb-16">
              Liturgi
              <span className="border-b-3 border-[#CBA72F] pb-1">cal M</span>
              inistries
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {liturgicalMinistries.map((ministry) => (
                <div
                  key={ministry.title}
                  className="py-4 rounded-3xl text-center hover:shadow-[0_0_20px_#0036295e] transition-all group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-200 group-hover:bg-[#003629] rounded-lg flex items-center justify-center transition-colors">
                    <ministry.icon className="text-2xl text-[#003629] group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">
                    {ministry.title}
                  </h3>
                  <p className="text-sm text-gray-500">{ministry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Serves />
    </>
  );
};

export default GospelPage;
