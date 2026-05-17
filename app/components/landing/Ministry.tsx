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
  return (
    <div className="px-20 mb-28">
      <h1 className="text-[2rem] font-semibold text-[#003629]" 
      style={{ fontFamily: "var(--font-newsreader)" }}>
        Ministries at a Glance
      </h1>
      <p className="text-[1.1rem] pt-1 pb-16 text-[#404945c0] w-[48vw] font-medium">
        Discover the many ways our community lives out the Gospel through
        service, education, and fellowship.
      </p>
      <div className="flex justify-center gap-5">
        {groups.map((item) => (
          <div key={item.title} className="">
            <Image src={item.img} alt={item.title} width={266} height={266} />
            <h2
              className="text-2xl text-[#003629] pt-3 pb-1 font-medium"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              {item.title}
            </h2>
            <p className="text-[#404945]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministry;
