"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 3-Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: Company Summary */}
          <div>
            <h3 className="text-[#222222] font-bold text-lg mb-4">BIMCAD Engineering Partners</h3>
            <p className="text-[#666666] text-sm leading-relaxed">
              BIMCAD Engineering Partners is a multidisciplinary design and engineering service provider, established in
              2019, specializing in high-quality CAD drafting and BIM solutions for infrastructure projects, from
              concept to construction.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#222222] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666666] hover:text-[#222222] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Offices */}
          <div>
            <h3 className="text-[#222222] font-bold text-lg mb-4">Our Offices</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[#222222]">Dubai Office</p>
                <p className="text-[#666666]">1504 – 15th Floor – B Block – Al Qadesia Tower</p>
                <p className="text-[#666666]">Mobile: 00971 56 572.1504</p>
              </div>
              <div>
                <p className="font-semibold text-[#222222]">Pakistan Office</p>
                <p className="text-[#666666]">18 – UG – Samama Mall & Residency – Gulberg – Islamabad</p>
              </div>
              <div>
                <p className="font-semibold text-[#222222]">USA Office</p>
                <p className="text-[#666666]">Available upon request</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 text-center text-[#666666] text-sm">
          <p>&copy; 2025 BIMCAD Engineering Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
