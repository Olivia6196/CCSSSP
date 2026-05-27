'use client';

import { Easing, motion } from 'framer-motion';
import Image from "next/image";

const Ministry = () => {
  const groups = [
    {
      img: "/images/music_and_liturgy.png",
      title: "Music & Liturgy",
      description: "Lifting our hearts through sacred sound.",
    },
    {
      img: "/images/faith_formation.png",
      title: "Faith Formation",
      description: "Growing together in wisdom and grace.",
    },
    {
      img: "/images/social_outreach.png",
      title: "Social Outreach",
      description: "Serving our neighbors with Christ's heart.",
    },
    {
      img: "/images/parish_fellowship.png",
      title: "Parish Fellowship",
      description: "Building bonds within our parish family.",
    },
  ];

  // Animation with increased delay
  const cardVariants = (index: number) => {
    let hiddenX = 0;
    let hiddenY = 0;

    if (index === 0) {       
      hiddenX = -90;
    } 
    else if (index === 1) {      
      hiddenY = -90;
    } 
    else if (index === 2) {     
      hiddenY = 90;
    } 
    else if (index === 3) {   
      hiddenX = 90;
    }

    return {
      hidden: {
        opacity: 0,
        x: hiddenX,
        y: hiddenY,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.85,
          ease: "ease-out" as Easing,
          delay: index * 0.5 + 0.4,
        },
      },
    };
  };

  return (
    <div className="px-4 sm:px-12 lg:px-20 mb-28">
      <motion.h1 
        className="text-[2rem] font-semibold text-[#003629]" 
        style={{ fontFamily: "var(--font-newsreader)" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Ministries at a Glance
      </motion.h1>

      <motion.p 
        className="text-[1.1rem] pt-1 pb-16 text-[#404945c0] lg:w-[48vw] font-medium"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
      >
        Discover the many ways our community lives out the Gospel through
        service, education, and fellowship.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-5">
        {groups.map((item, index) => (
          <motion.div
            key={item.title}
            className="group"
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
            whileHover={{ y: -12, transition: { duration: 0.8 } }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                width={266} 
                height={266} 
                className="h-[80vw] w-[95vw] md:w-80 md:h-80 lg:w-66.5 lg:h-66.5 rounded-2xl object-cover"
              />
            </motion.div>

            <h2
              className="text-2xl text-[#003629] pt-3 pb-1 font-medium"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              {item.title}
            </h2>
            <p className="text-[#404945]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ministry;