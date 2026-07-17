import Link from"next/link";
import { HeartPulse, Mail, Phone, MapPin } from"lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"{...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"{...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"{...props}><rect width="20"height="20"x="2"y="2"rx="5"ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5"x2="17.51"y1="6.5"y2="6.5"/></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"{...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4"height="12"x="2"y="9"/><circle cx="4"cy="4"r="2"/></svg>
);

export function Footer() {
 return (
 <footer className="bg-white text-[var(--color-black)] pt-20 pb-10 border-t border-gray-200">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
 {/* Brand & Child Orgs */}
 <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
 <Link href="/"className="inline-block group">
 <img src="/jsws-logo.png"alt="JSWS Logo"className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"/>
 </Link>
 <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
 Jamila Sultan Welfare Society is committed to providing accessible healthcare, preventive medicine, and community welfare for underserved families across Pakistan.
 </p>
 
 {/* Child Organizations */}
 <div className="pt-2 pb-4 flex flex-row flex-wrap justify-center md:justify-start gap-4 items-center">
 <img src="/sarc-logo.png"alt="SARC Logo"className="h-10 sm:h-12 md:h-14 w-auto object-contain"/>
 <img src="/jsmdc-logo.png"alt="JSMDC Logo"className="h-10 sm:h-12 md:h-14 w-auto object-contain"/>
 </div>

 <div className="flex items-center justify-center md:justify-start gap-4">
 <a href="#"className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
 <Facebook className="h-5 w-5"/>
 </a>
 <a href="#"className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
 <Twitter className="h-5 w-5"/>
 </a>
 <a href="#"className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
 <Instagram className="h-5 w-5"/>
 </a>
 <a href="#"className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
 <Linkedin className="h-5 w-5"/>
 </a>
 </div>
 </div>

 {/* Quick Links */}
 <div>
 <h4 className="font-heading text-lg font-semibold mb-6 text-gray-900">Quick Links</h4>
 <ul className="space-y-3">
 <li><Link href="/about"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">About Us</Link></li>
 <li><Link href="/services"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Healthcare Services</Link></li>
 <li><Link href="/laboratory"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Medical Laboratory</Link></li>
 <li><Link href="/doctors"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Our Doctors</Link></li>
 <li><Link href="/volunteer"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Volunteer Program</Link></li>
 </ul>
 </div>

 {/* Departments */}
 <div>
 <h4 className="font-heading text-lg font-semibold mb-6 text-gray-900">Departments</h4>
 <ul className="space-y-3">
 <li><Link href="/services#general"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">General Consultation</Link></li>
 <li><Link href="/services#womens-health"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Women's Health</Link></li>
 <li><Link href="/services#childrens-health"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Children's Health</Link></li>
 <li><Link href="/services#radiology"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Radiology</Link></li>
 <li><Link href="/services#vaccination"className="text-gray-600 hover:text-[var(--color-primary)] :text-white transition-colors text-sm">Vaccination Center</Link></li>
 </ul>
 </div>

 {/* Contact Info */}
 <div>
 <h4 className="font-heading text-lg font-semibold mb-6 text-gray-900">Contact Us</h4>
 <ul className="space-y-6">
 <li className="flex items-start gap-3">
 <MapPin className="h-6 w-6 text-[var(--color-primary)] shrink-0 mt-0.5"/>
 <span className="text-gray-600 text-sm leading-relaxed">P-66 - 15 A, Sector 31A<br/>Allah Wala Town, Korangi<br/>Karachi, 74900, Pakistan</span>
 </li>
 <li className="flex items-center gap-3">
 <Phone className="h-5 w-5 text-[var(--color-primary)] shrink-0"/>
 <div className="flex flex-col gap-1">
 <span className="text-gray-600 text-sm">+92 307 2021882</span>
 <span className="text-gray-600 text-sm">+92 336 3398787</span>
 </div>
 </li>
 <li className="flex items-center gap-3">
 <Mail className="h-5 w-5 text-[var(--color-primary)] shrink-0"/>
 <span className="text-gray-600 text-sm">jswswelfare@gmail.com</span>
 </li>
 </ul>
 </div>
 </div>

 <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-gray-500 text-sm text-center md:text-left">
 &copy; {new Date().getFullYear()} Jamila Sultan Welfare Society. All rights reserved.
 </p>
 <div className="flex items-center gap-6 text-sm text-gray-500">
 <Link href="/privacy"className="hover:text-[var(--color-primary)] :text-white transition-colors">Privacy Policy</Link>
 <Link href="/terms"className="hover:text-[var(--color-primary)] :text-white transition-colors">Terms of Service</Link>
 </div>
 </div>
 </div>
 </footer>
 );
}
