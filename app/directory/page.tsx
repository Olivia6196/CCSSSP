import Image from "next/image"
import RelatedSite from "../components/RelatedSite"
import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parish Directory | St. Stephen-St. Patrick",
  description:
    "Find our Parish Directory, staff contacts, ministry leaders, and photo gallery. Connect with our community at St. Stephen-St. Patrick Catholic Parish in Whitney Point, NY.",
  keywords: [
    "Parish Directory",
    "St. Stephen St. Patrick Parish Directory",
    "Whitney Point Catholic Church Directory",
    "Church Staff Directory",
    "Ministry Leaders",
    "Parish Photo Gallery",
    "Catholic Parish Whitney Point NY",
    "Church Contacts",
    "St. Stephen-St. Patrick Directory",
  ],
  openGraph: {
    title: "Parish Directory | St. Stephen-St. Patrick",
    description:
      "Access our parish directory, connect with staff and ministry leaders, and view our photo gallery.",
    url: "https://www.ccsssp.com/directory",
    siteName: "St. Stephen-St. Patrick Catholic Parish",
    images: [
      {
        url: "/images/parish_directory.png",   // Using your hero image
        width: 1200,
        height: 630,
        alt: "Parish Directory - St. Stephen-St. Patrick",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parish Directory | St. Stephen-St. Patrick",
    description: "Staff, ministry leaders, and community directory",
  },
  alternates: {
    canonical: "https://www.ccsssp.com/directory",
  },
};

const page = () => {
  return (
    <>
    <div className="relative lg:h-screen min-h-100 flex justify-center text-center items-center overflow-hidden mt-5 mb-24 mx-4 sm:mx-7 bg-white rounded-3xl">
                  <Image
                    src="/images/parish_directory.png"
                    alt="parish directory"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
    
                  <div className="relative z-10 max-w-3xl">
                    <h1 className="text-white text-3xl sm:text-5xl font-semibold leading-16 pb-2"
                    style={{ fontFamily: "var(--font-newsreader)" }}
                    >
                      Parish Directory
                    </h1>
    
                    <p className="text-white/75 md:w-lg font-semibold text-[1.12rem] leading-7 italic">Connecting our community through service and leadership. Our staff and ministry leaders are here to support your spiritual journey and parish engagement.</p>
                  </div>
                </div>
                <RelatedSite />
                <div className="text-center pb-20 mt-20 lg:mt-0 mx-4 sm:mx-10 md:mx-20">
                <h2 className="text-4xl font-semibold pb-8">Directory</h2>
                <p className="text-[1.24rem] font-medium text-black/70 pb-3 md:pb-1">Our Parish Directory can be found at the following address:</p>
                <Link
                href="https://www.figma.com/exit?url=https%3A%2F%2Fom319443.onlineolanmills.com%2F"
                className="text-[1.24rem] font-medium text-black/70 underline"
                target="_blank"
                >
                  https://om319443.onlineolanmills.com
                </Link>
                <p className="text-[1.24rem] font-medium text-black/70 pt-3 md:pt-1">In order to view the photo gallery, please obtain the password from the parish bulletin.</p>
                </div>
                </>
  )
}

export default page