import Image from "next/image"
import RelatedSite from "../components/RelatedSite"
import Link from "next/link"

const page = () => {
  return (
    <>
    <div className="relative h-screen min-h-150 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-7 bg-white rounded-3xl">
                  <Image
                    src="/images/parish_directory.png"
                    alt="parish directory"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
    
                  <div className="relative z-10 max-w-3xl">
                    <h1 className="text-white text-5xl font-semibold leading-16 pb-2"
                    style={{ fontFamily: "var(--font-newsreader)" }}
                    >
                      Parish Directory
                    </h1>
    
                    <p className="text-white/75 w-lg font-semibold text-[1.12rem] leading-7 italic">Connecting our community through service and leadership. Our staff and ministry leaders are here to support your spiritual journey and parish engagement.</p>
                  </div>
                </div>
                <RelatedSite />
                <div className="text-center pb-20">
                <h2 className="text-4xl font-semibold pb-8">Directory</h2>
                <p className="text-[1.24rem] font-medium text-black/70 pb-1">Our Parish Directory can be found at the following address:</p>
                <Link
                href="https://www.figma.com/exit?url=https%3A%2F%2Fom319443.onlineolanmills.com%2F"
                className="text-[1.24rem] font-medium text-black/70 underline"
                >
                  https://om319443.onlineolanmills.com
                </Link>
                <p className="text-[1.24rem] font-medium text-black/70 pt-1">In order to view the photo gallery, please obtain the password from the parish bulletin.</p>
                </div>
                </>
  )
}

export default page