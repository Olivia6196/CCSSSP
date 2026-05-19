"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import DropdownMenu from "../DropdownMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Living the Gospel", href: "/gospel" },
    { label: "News & Events", href: "/news" },
    { label: "Church Information", href: "/information" },
    { label: "Directory", href: "/directory" },
    { label: "Schedules", href: "/schedules" },
  ];

  const menuItems = [
    { label: 'Our Mission Statement', href: '/menu/mission' },
    { label: 'Service Schedule', href: '/menu/service' },
    { label: 'Sacrament', href: '/menu/sacrament' },
    { label: 'Food Pantry', href: '/menu/food_pantry' },
    { label: 'Contact', href: '/menu/contact' },
    { label: 'Links', href: '/menu/link' },
  ];

  return (
    <>
      {/* Top Header - Unchanged */}
      <header className="hidden h-28 lg:flex bg-[#1B4D3E] justify-center items-center gap-6">
        <Image
          src="/images/logo.png"
          alt="Logo image"
          width={121.51}
          height={121}
        />
        <p
          className="text-[2.3rem] text-white leading-none"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          Catholic Community of St. Stephen’s - St. Patrick’s
        </p>
      </header>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-[#1B4D3E] lg:bg-white border-b border-b-gray-400 sticky top-0 z-50 w-full px-5 sm:px-10 lg:px-20 py-2 lg:py-3.5">
        
        {/* Logo - Left Side (Now visible on all screens) */}
        <div className="flex lg:hidden items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="St. Stephen’s Logo"
              width={65}
              height={65}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - Unchanged */}
        <ul className="hidden lg:flex gap-7 items-center font-semibold text-black/75">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`text-[0.95rem] border-b-2 transition-colors ${
                  pathname === item.href ? 'border-[#CBA72F]' : 'border-transparent'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Explore Button + Hamburger (Mobile + Tablet) */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Explore our Parish Button */}
          <div className="block">
            <DropdownMenu label="Explore our Parish" items={menuItems} />
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <IoMdClose className="hidden"/> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Unchanged logic */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-60" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-4/5 max-w-sm h-full mr-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b flex items-center">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <IoMdClose className="text-4xl text-gray-600" />
              </button>
            </div>

            <nav className="flex flex-col p-6 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-4 px-4 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;