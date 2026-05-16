'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label?: string;
  items: DropdownItem[];
}

export default function DropdownMenu({
  label = "Main Menu",
  items,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-1.5 bg-[#003629] hover:bg-green-900 hover:shadow-[0_0_10px_#CBA72F] text-white font-medium rounded-3xl transition-all active:scale-95"
      >
        {label}
        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-6 py-3 text-black/85 font-semibold hover:bg-gray-200  hover:border-gray-300 hover:rounded-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}