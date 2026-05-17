import Image from "next/image"
import RelatedSite from "../components/RelatedSite"

const page = () => {
  return (
    <>
    <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-40 mx-7 bg-white rounded-3xl">
                  <Image
                    src="/images/living_the_gospel.png"
                    alt="living gospel"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
    
                  <div className="relative z-10 max-w-3xl">
                    <h1 className="text-white text-5xl font-semibold leading-16 pb-2"
                    style={{ fontFamily: "var(--font-newsreader)" }}
                    >
                      Living the Gospel
                    </h1>
    
                    <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">"Go therefore and make disciples of all nations..."</p>
                  </div>
                </div>
                <RelatedSite />
                </>
  )
}

export default page