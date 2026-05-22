import { Metadata } from "next";
import Schedules from "./Schedules";

export const metadata: Metadata = {
  title: "Mass Schedules & Liturgical Services | St. Stephen-St. Patrick",
  description:
    "View our Mass and Sacramental Schedules for St. Stephen (Marathon), St. Patrick (Whitney Point), and Our Lady of Perpetual Help (Cincinnatus). Find weekday and weekend Mass times.",
  keywords: [
    "Mass Schedule",
    "Catholic Mass Times",
    "St. Stephen Marathon NY",
    "St. Patrick Whitney Point",
    "Our Lady of Perpetual Help Cincinnatus",
    "Liturgical Schedule",
    "Weekend Mass",
    "Weekday Mass",
    "Sacramental Schedules",
    "Catholic Church Whitney Point NY",
  ],
  openGraph: {
    title: "Mass Schedules | St. Stephen-St. Patrick Parish",
    description:
      "Current Mass times and liturgical schedules for our three churches.",
    url: "https://yourwebsite.com/schedules",
    siteName: "St. Stephen-St. Patrick Catholic Parish",
    images: [
      {
        url: "/images/schedules.png",        // Hero image
        width: 1200,
        height: 630,
        alt: "Mass and Liturgical Schedules",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mass Schedules | St. Stephen-St. Patrick",
    description: "Weekend and Weekday Mass Times",
  },
  alternates: {
    canonical: "https://yourwebsite.com/schedules",
  },
};

export default function SchedulesPage() {
  return <Schedules />;
}