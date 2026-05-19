import Image from "next/image";

const Message = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-2 sm:gap-20 px-4 sm:px-12 lg:px-20 mb-20 md:mb-28">
      <div className="relative">
        <Image
          src="/images/rev.png"
          alt="A Rev.fr"
          width={528}
          height={660}
          className="rounded-3xl"
        />
        <p className="hidden sm:absolute bottom-[-3vw] right-[3vw] lg:right-[-4vw]  bg-[#540505] px-6 py-14 rounded-4xl text-white w-[25vw] lg:w-[15vw] sm:flex flex-col text-[1.3rem] tracking-wide">
          <span
            className="text-[#FFE088] text-4xl mb-[-1vw]"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            "
          </span>
          Welcome to our spiritual family.
        </p>
      </div>
      <div className="pt-24">
        <h2
          className="text-3xl font-semibold text-[#003629] pb-6"
          style={{ fontFamily: "var(--font-newsreader)" }}
        >
          A Message from our Rev. Fr
        </h2>
        <p className="border-l-3 border-[#CBA72F] lg:w-[37vw] pl-8 tracking-wide leading-9 text-sm font-semibold text-black/70 mb-8">
          <span
            className="text-[#735C00] font-medium text-2xl italic"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            "Behold, how good and pleasant it is when brothers dwell in unity!"
          </span>
          <br />— PSALM 133:1
        </p>
        <p className="lg:w-[42.5vw] font-medium text-[1.1rem] text-black/60">
          It is a joy to welcome you to our community. Whether you are a
          lifelong parishioner or searching for a spiritual home, we invite you
          to experience the sacraments and the warmth of our parish life.
        </p>
        <p className="lg:w-[42vw] font-medium text-[1.1rem] text-black/60 pt-6 py-8">
          Our community is built on the traditions of St. Stephen and St.
          Patrick —faith, service, and hospitality. We look forward to meeting
          you at the altar.
        </p>
        <p className="font-bold text-[#003629]">
          Fr. Thomas O'Malley, Pastor
        </p>
      </div>
    </div>
  );
};

export default Message;
