import Image from "next/image"
import RelatedSite from "../components/RelatedSite"
import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Information & Parish History | St. Stephen-St. Patrick",
  description:
    "Learn about the Catholic Community of St. Stephen-St. Patrick in Whitney Point, NY. Parish history, Children's Liturgy of the Word, Prayer Chain, Food Pantry, support for the sick, military prayer list, and new parishioner registration.",
  keywords: [
    "St. Stephen St. Patrick Parish",
    "Whitney Point Catholic Church",
    "Church Information",
    "Parish History",
    "St. Patrick's Church History",
    "St. Stephen's Church History",
    "Children's Liturgy of the Word",
    "Prayer Chain",
    "Ecumenical Food Pantry",
    "Military Prayer List",
    "Intentions of the Sick",
    "New Parishioner Registration",
    "Whitney Point NY Catholic",
  ],
  openGraph: {
    title: "Church Information & Parish History",
    description:
      "Discover the history, ministries, and ways to get involved at St. Stephen-St. Patrick Catholic Parish in Whitney Point, New York.",
    url: "https://www.ccsssp.com/information",
    siteName: "St. Stephen-St. Patrick Catholic Parish",
    images: [
      {
        url: "/images/history_of_faith.png",
        width: 1200,
        height: 630,
        alt: "A Living History of Faith - St. Stephen-St. Patrick Parish",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Information | St. Stephen-St. Patrick",
    description: "Parish history, ministries, and important information",
  },
  alternates: {
    canonical: "https://www.ccsssp.com/information",
  },
};

const page = () => {
    const information = [
        {
            title:"Children’s Liturgy of the Word",
            decription:"This is an age-appropriate Liturgy of the Word offered for ages 3 and up at the 8:30 Mass. No pre-registration is needed. All children are welcome and encouraged to attend. Just before the Liturgy of the Word begins for the assembly, children are invited to go with the weekly leader from the Church to the downstairs hall. During this special time, the volunteer leader guides the children through prayers, readings that are simplified for children and a reflection message based on the readings. The scripture readings used are the same as the assembly uses and the children are encouraged to share the message with their families after Mass."
        },
        {
            title:"Intentions of the Sick",
            decription:"If you know someone that may be ill, facing surgery, etc., you can write down the person’s name on the sheet on the small podium as you come in to Mass at both our churches, and names will be read that Sunday during the Intercessions. There’s a new sheet there every Sunday."
        },
        {
            title:"WP Ecumenical Food Pantry",
            decription:"During the month of March we are collecting pasta for the WP Ecumenical Food Pantry. There are marked baskets at the entrances of our churches. Thank you for all your food & monetary donations."
        },
        {
            title:"Your Empty Bottles and Cans With Deposit Returns ",
            decription:"It help fund The CC of St. Stephen-St. Patrick’s Youth Activities,. They can be deposited in the bin at our Whitney Point Church parking lot. Thank you for your support."
        },
        {
            title:"Books to Borrow",
            decription:"Books for our parish program can be placed in the basket at each church setting so they can be processed for borrowing. Feel free to take a book home from the pew racks! There are a variety of topics to choose from!"
        },
        {
            title:"Please Pray For Our Following Friends and Family in the Military",
            decription:"Major Corrine Miller, Sgt. Jacob Rau, Devon McGill, Joshua Lilley, PV2 James McGill, Lt. Cpl John Larkin,Jr., USMC, Sgt. Heather Fox, Brett Hayes, Captain Caleb Miller, Sgt. Megan Ballard, A1C Brendan Schneider, Kris Carstens, LC USMC Daniel Morehouse, SSG Steven Gross, USMC Staff Sgt. Dan Votra, Sgt. Nicholas Stone, Lt. Paul McDonald, Lt. Commander Marvin Joel Scott III, AF2nd Lt. Emily Steele, OS3 Jonathan Schneider, Sgt. Zachary Reardon USMC, Staff Sgt. Justin Blaisdell, Staff Sergeant Michael Hetzler, Lt. LCDR Maria Lescord, A2C Derek Lescord, Major John Thomas, Major Joy Thomas and our pastor, Lt. Colonel Douglas Cunningham. If you have a friend or family member serving our country and would like their name mentioned and to be kept in our prayers, weekly in our bulletin, please contact the parish office, 692-3911."
        },
        {
            title:"If you know someone",
            decription:"that is ill, facing surgery, or some other kind of difficulty, and needs our prayers, please call Dottie Angel at 656-9230 or Pat Canfield at 849-6978. Dottie will lead the Prayer Chain we have at The CC of St. Stephen-St. Patrick. Supporting each other with the Power of Prayer is the best medicine."
        },
    ]
  return (
    <>
    <div className="relative lg:h-screen min-h-100 flex justify-center text-center items-center overflow-hidden mt-5 mb-20 lg:mb-28 mx-3 sm:mx-7 bg-white rounded-3xl">
                  <Image
                    src="/images/history_of_faith.png"
                    alt="history of faith"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
    
                  <div className="relative z-10 max-w-3xl">
                    <h1 className="text-white text-3xl sm:text-5xl font-semibold sm:leading-16 pb-7 sm:pb-5 lg:pb-2"
                    style={{ fontFamily: "var(--font-newsreader)" }}
                    >
                      A Living History of Faith
                    </h1>
    
                    <p className="text-white/75 px-2 sm:w-lg font-semibold text-[1.12rem] leading-7 italic">Two historic parishes united in service to Christ, rooted in the heritage of St. Stephen and the spirit of St. Patrick.</p>
                  </div>
                </div>
                <RelatedSite />
                <div className=" pl-4 pr-5 sm:px-10 lg:px-20 pb-12 mt-12 sm:mt-24 lg:mt-0">
                <h1 className="text-4xl font-semibold pb-10">Church Information</h1>
                <h2 className="text-2xl font-medium pb-2">Welcome!</h2>
                <div className="ml-4 sm:ml-10 text-justify sm:text-left">
                <ul className="list-disc text-[1.25rem] text-black/90 pb-6">
                    <li>If you are new to our parish, or have not yet registered, and would like more information about our church, please pick up a registration envelope at the entrance to each church. You will find a welcome letter, a list of contact names and numbers, a stewardship survey, and a registration form in the envelope. The forms can be completed and returned to the office, placed in the offertory baskets at any of the Masses, or given to Fr Doug. We welcome you to our church and are delighted you are with us.</li></ul>
                    </div>
                <h2 className="text-2xl font-medium pb-2">Church Histories</h2>
                <ul className="list-disc list-inside text-[1.25rem] text-black/90 pb-6 pl-5 underline">
                    <li>
                        <Link
                        href="https://www.ccsssp.com/wp-content/uploads/2018/02/St-Patricks-History.pdf"
                        download
                        target="_blank"
                        >
                            St Patrick's Church History
                        </Link>
                    </li>
                    <li>
                         <Link
                        href="https://www.ccsssp.com/wp-content/uploads/2018/02/St-Stephens-History.pdf"
                        download
                        target="_blank"
                        >
                            St Stephen's Church History
                        </Link>
                    </li>
                </ul>
                <h2 className="text-2xl font-medium pb-2">Information</h2>
                <ul className="list-disc ml-4 sm:ml-10 text-justify sm:text-left">
                    {information.map((item)=>
                    <li key={item.title}
                    className="text-[1.25rem] text-black/90 pb-6 ">
                        <span className="font-medium">{item.title}</span>
                        <br />
                        {item.decription}
                        </li>
                    )}
                </ul>
                </div>
                </>
  )
}

export default page