"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import RelatedSite from "./components/RelatedSite";
import Link from "next/link";
import { MdOutlineChurch } from "react-icons/md";
import { PiBookOpenText, PiClock } from "react-icons/pi";
import Message from "./components/landing/Message";
import Ministry from "./components/landing/Ministry";

const page = () => {
  const slides = [
    {
      title: "Where Faith Finds a Home and Hearts Find Peace.",
      description:
        "Welcome to the Catholic Community of St. Stephen and St. Patrick. Join us as we celebrate the beauty of Christ's love in our historic parishes.",
      image: "/images/hero_img1.png",
    },
    {
      title: "“Growing Together in Christ”",
      description:
        "Experience meaningful worship, spiritual growth and a supportive faith community.",
      image: "/images/hero_img2.png",
    },
    {
      title: "“Where Faith feels like family”",
      description:
        "Welcome to the Catholic Community of St. Stephen and St. Patrick. Join a welcoming Catholic Community dedicated to worship,fellowship and Service.",
      image: "/images/hero_img3.png",
    },
    {
      title: "“Living the Gospel Everyday”",
      description:
        "Empowering believers to serve God and impact the world with love and compassion",
      image: "/images/hero_img4.png",
    },
    {
      title: "“United in Prayer and Purpose”",
      description:
        "Building lives centered on Christ through faith, love and community outreach.",
      image: "/images/hero_img5.png",
    },
    {
      title: "“A living Community of Faith and Hope”",
      description:
        "Discover a place of worship, connection and spiritual renewal for all generations",
      image: "/images/hero_img6.png",
    },
  ];

  const features = [
    {
      icon: PiClock,
      title:"Mass Times",
      description:"Saturdays: 4:00 PM (St. Stephen) Sundays: 8:30 AM (St. Patrick) Sundays: 10:30 AM (St. Stephen)",
      link: "/schedules",
      linkTittle:"FULL SCHEDULE"
    },
    {
      icon: PiBookOpenText,
      title:"Latest Bulletin",
      description:"Stay connected with our weekly parish announcements and liturgical updates.",
      link: "/news",
      linkTittle:"DOWNLOAD PDF"
    },
    {
      icon: MdOutlineChurch,
      title:"Sacraments",
      description:"Inquiry about Baptism, Marriage, or Reconciliation? Find resources and schedules.",
      link: "/sacrament",
      linkTittle:"LEARN MORE"
    }
  ]
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 4000 }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative lg:h-screen min-h-100 flex items-center overflow-hidden mt-5 mb-20 lg:mb-40 mx-3 sm:mx-7 bg-white rounded-3xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-[#003629b2]" />

              <div className="relative px-5  md:pl-20 z-10 max-w-3xl">
                <h1 className="text-white text-3xl sm:text-5xl font-semibold md:leading-16 pb-6 sm:pb-2"
                style={{ fontFamily: "var(--font-newsreader)" }}
                >
                  {slide.title}
                </h1>

                <p className="text-white/75 w-full sm:w-lg font-semibold text-[1.05rem] leading-7">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <RelatedSite />
      <div className=" grid grid-cols-1 lg:flex justify-center gap-5 text-center mt-20 lg:mt-0 mb-20 md:mb-36 mx-4 sm:mx-10 md:mx-20">
        {features.map((item)=>
          <div key={item.title} className="group bg-gray-200 border border-gray-300 rounded-3xl py-10 px-14 hover:bg-[#003629] hover:shadow-xl">
              <item.icon size={40} className="text-[#003629] m-auto group-hover:text-[#FFE088]"/>
             <h2 className="text-[#003629] text-[1.6rem] font-medium pt-4 group-hover:text-white"
             style={{ fontFamily: "var(--font-newsreader)" }}
             >
              {item.title}
              </h2>
             <p className="sm:m-auto sm:w-[38vw] lg:w-[20vw] text-[1.1rem] font-medium leading-7 py-6 text-black/80 group-hover:text-white/70 group-hover:italic group-hover:font-light">{item.description}</p>
             <Link 
             href={item.link}
             className="text-[1.05rem] font-medium text-[#003629] border-b-2 border-[#003629] group-hover:bg-[#FFE088] group-hover:border-0 group-hover:rounded-full group-hover:py-2 group-hover:px-4"
             >
              {item.linkTittle}
             </Link>
          </div>
        )}
      </div>
      <Message />
      <Ministry />
    </>
  );
};

export default page;
