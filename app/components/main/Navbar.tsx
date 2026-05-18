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
      {/* Top Header - Your Original */}
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

      {/* Main Navbar - Closer to your original layout */}
      <nav className="flex gap-[20vw] px-20 py-3.5 border-b border-b-gray-400 bg-white sticky top-0 z-50 w-full">
        
        {/* Logo on Left (Mobile + Desktop) */}
        <div className="flex items-center lg:hidden">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="St. Stephen’s Logo"
              width={65}
              height={65}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Explore Dropdown - Kept on the right as in your original */}
        <div className="block ml-auto">
          <DropdownMenu label="Explore our Parish" items={menuItems} />
        </div>

        {/* Hamburger - Right Side (Mobile Only) */}
        <button
          className="lg:hidden text-3xl text-gray-700 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <IoMdClose  className="hidden"/> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
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