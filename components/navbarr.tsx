"use client";

import React from "react";
import { 
  Search, 
  Globe, 
  ChevronDown, 
  LayoutGrid, 
  Sparkles 
} from "lucide-react";
import Image from "next/image";

export default function WebuildNavbar() {
  return (
    <div className="w-full font-sans"> 
      <div className="w-full bg-white border-b border-gray-100 h-[50px] flex items-center justify-between px-6 lg:px-12 relative z-20">
        
        {/* LEFT: Webuild Worldwide Button */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-[#043270] rounded text-[#043270] text-sm font-bold hover:bg-[#043270] hover:text-white transition-colors uppercase tracking-wide">
            <LayoutGrid size={16} strokeWidth={2.5} />
            <span>SRsaathi</span>
          </button>
        </div>

        {/* RIGHT: Stock, Search, Language */}
        <div className="flex items-center gap-6 text-sm">
          {/* Stock Info */}
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span>€ 3.598</span>
            <span className="text-green-600">+0.39%</span>
          </div>
          
          <div className="h-4 w-px bg-gray-300"></div> {/* Divider */}

          {/* Search */}
          <button className="flex items-center gap-2 font-semibold text-gray-800 hover:text-[#043270]">
            <Search size={18} className="text-[#043270]" />
            <span>Search</span>
          </button>

          <div className="h-4 w-px bg-gray-300"></div> {/* Divider */}

          {/* Language Selector */}
          <button className="flex items-center gap-1 font-bold text-gray-800 hover:text-[#043270]">
            <Globe size={18} className="text-[#043270]" />
            <span>EN</span>
            <ChevronDown size={14} className="text-[#043270]" />
          </button>
        </div>
      </div>
      <div className="relative w-full h-[60px] bg-[#97144d] flex items-center justify-between px-6 lg:px-12 text-white z-10">
        
        {/* LEFT MENU */}
        <nav className="flex items-center gap-8 pl-4">
          <NavItem text="GROUP" />
          <NavItem text="BUSINESS AREAS" />
          <NavItem text="PROJECTS" />
          {/* Active Item with Sparkle */}
          <div className="relative group cursor-pointer flex items-center gap-1">
            <span className="text-[13px] font-extrabold tracking-wide text-white group-hover:text-gray-300 transition-colors uppercase border-b-2 border-[#043270] pb-[19px]">
              VIDEOS & STORIES
            </span>
            <div className="absolute -right-5 top-[-4px] bg-[#043270] text-white rounded-full p-0.5">
               <Sparkles size={10} fill="white" />
            </div>
          </div>
        </nav>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[280px] h-full pointer-events-none flex justify-center">
          {/* The Custom Curve SVG */}
          <svg 
            width="280" 
            height="60" 
            viewBox="0 0 280 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0"
          > 
            <path 
              d="M0 0H280V0C280 0 270 0.5 260 10C250 20 240 55 210 55H70C40 55 30 20 20 10C10 0.5 0 0 0 0V0Z" 
              fill="white"
            />
          </svg>

          {/* The Logo Text/Icon */}
          <div className="relative z-20 mb-1 flex items-center justify-center gap-2">
            <span className="text-[#043270] font-bold text-3xl tracking-tight">
             
            <Image src={'/full_logo.svg'} alt="" height={80} width={80} />
            </span> 
          </div>
        </div>

        {/* RIGHT MENU */}
        <nav className="flex items-center gap-8 pr-4">
           <NavItem text="INVESTOR RELATIONS" />
          <NavItem text="GOVERNANCE" />
          <NavItem text="MEDIA" />
          <NavItem text="CAREERS" />
        </nav>

      </div>
    </div>
  );
}

// Simple Helper Component for Menu Items
function NavItem({ text }: { text: string }) {
  return (
    <a href="#" className="text-[13px] font-extrabold tracking-wide text-white hover:text-gray-300 transition-colors uppercase">
      {text}
    </a>
  );
}