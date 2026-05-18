"use client";
import Image from "next/image";
import DropdownMenu from "../DropdownMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const menuItems = [
    { label: 'Our Mission Statement', href: '/menu/mission' },
    { label: 'Service Schedule', href: '/menu/service' },
    { label: 'Sacrament', href: '/menu/sacrament' },
    { label: 'Food Pantry', href: '/menu/food_pantry' },
    { label: 'Contact', href: '/menu/contact' },
    { label: 'Links', href: '/menu/link' },
  ];

  const navLinks =[
    { label: "Home", href: "/"},
    { label: "Living the Gospel", href: "/gospel"},
    { label: "News & Events", href: "/news"},
    { label: "Church Information", href: "/information"},
    { label: "Directory", href: "/directory"},
    { label: "Schedules", href: "/schedules"},
  ];

  return (
    <>
        <header className="hidden h-32 lg:flex bg-[#1B4D3E] justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo image"
              width={121.51}
              height={121}
            />
            <p className="text-[2.3rem]  py-8 text-white"
            style={{ fontFamily: "var(--font-playfair-display)" }}
            >
                Catholic Community of St. Stephen’s - St. Patrick’s
            </p>
        </header>
        <nav className="flex gap-[25vw] pl-20 py-3.5 border-b border-b-gray-400 bg-white sticky top-0 z-50 w-full">
            <ul className="hidden lg:flex gap-7 items-center font-semibold text-black/75">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={` text-[0.95rem] border-b-2 transition-colors ${pathname === item.href ? 'border-[#CBA72F]' : 'border-transparent'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
           <DropdownMenu label="Explore our Parish" items={menuItems} />
        </nav>
    </>


  )
}

export default Navbar