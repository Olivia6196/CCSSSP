import Form from "@/app/components/Form";
import RelatedSite from "@/app/components/RelatedSite";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-7 bg-white rounded-3xl">
        <Image
          src="/images/sacraments.png"
          alt="sacraments"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0e141371]" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className="text-white text-[3.5rem] font-semibold leading-16 pb-2"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Sacraments
          </h1>

          <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">
            “Encounter God through Sacraments”
          </p>
        </div>
      </div>
      <RelatedSite />
      <div className="flex justify-center gap-28 mx-10 mb-24 mt-14">
        <div className="text-justify">
          <h2 className="text-[2rem] font-semibold pb-6">Sacraments</h2>
           <ul className="list-disc w-[35vw] text-[1.15rem] text-justify ml-7">
            <li><span className="font-medium leading-8">Baptism- </span>Please call the rectory to make arrangements</li>
            <li><span className="font-medium leading-8">Reconciliation- </span>As announced</li>
            <li><span className="font-medium leading-8">Weddings- </span>Please call the rectory six months in advance to make arrangements</li>
            <li><span className="font-medium leading-8">Sick/Infirmed- </span>If you have someone who is sick or in the hospital, please notify the rectory so they can be pastorally attended.</li>
            <li><span className="font-medium leading-8">RCIA- </span>Thinking of becoming into full communion with the Roman Catholic Church? Please call the rectory to set up an appointment to speak with the pastor</li>
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
