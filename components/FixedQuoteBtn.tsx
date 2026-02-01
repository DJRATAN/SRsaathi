import Link from "next/link";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle, PhoneForwarded, Mails } from "lucide-react"

const FixedQuoteBtn = () => {
  const socialLinks = [
    { icon: PhoneForwarded, href: "https://www.facebook.com/people/SRsaathi/61583142583576/", label: "Facebook" },
    { icon: Mails, href: "https://www.instagram.com/srsaathi/", label: "Instagram" },
    { icon: MessageCircle, href: "https://x.com/SRsaathi", label: "Twitter" },
  ]
  return (
    <>
      <div className="fixed top-30 right-0 z-[9999]">
        <Link
          href="/quote"
          className="
            flex items-center gap-2 border bg-white border-[#043270] rounded text-[#043270] text-sm font-bold   hover:text-[#97144d] hover:border-[#97144d] transition uppercase py-3 px-8 rounded-t-lg shadow-[0_0_10px_rgba(0,0,0,0.3)]
             duration-300 ease-in-out
            origin-bottom-right  
            rotate-[-90deg]
            translate-y-[50%] 
            translate-x-0
          "
        >
          <span>Get a Quote</span>
        </Link>
      </div>
      <div className="fixed bottom-48 right-6 z-[9999] flex flex-col gap-4">

        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="
          group w-8 h-8 flex items-center justify-center
          p-2 rounded-full
          border border-[#97144d]
          bg-transparent
          transition-all duration-200
          hover:bg-[#043270]
          hover:border-[#043270]
        "
            >
              <Icon
                className="
            w-5 h-5
            text-[#97144d]
            transition-colors duration-200
            group-hover:text-white
          "
              />
            </Link>
          )
        })}


      </div>
    </>
  );
};

export default FixedQuoteBtn;