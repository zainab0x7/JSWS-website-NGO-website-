import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { BidiLTR } from "@/components/ui/BidiLTR";

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
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-50 text-gray-900 pt-16 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand & Child Orgs */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block group">
              <img src="/jsws-logo.png" alt="JSWS Logo" className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              {t('description')}
            </p>
            
            {/* Child Organizations */}
            <div className="pt-2 pb-4 flex flex-col items-center md:items-start gap-3 w-full">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Our Initiatives</p>
              <div className="flex flex-row flex-nowrap justify-center md:justify-start gap-4 sm:gap-6 items-center bg-white px-4 sm:px-6 py-3 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow overflow-hidden max-w-full">
                <img src="/sarc-logo.png" alt="SARC Logo" className="h-10 sm:h-14 max-w-[100px] sm:max-w-[130px] w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 shrink-0" />
                <div className="w-px h-8 bg-gray-200 shrink-0"></div>
                <img src="/jsmdc-logo.png" alt="JSMDC Logo" className="h-10 sm:h-14 max-w-[100px] sm:max-w-[130px] w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 shrink-0" />
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all shadow-sm">
                <Facebook className="h-5 w-5"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all shadow-sm">
                <Twitter className="h-5 w-5"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all shadow-sm">
                <Instagram className="h-5 w-5"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all shadow-sm">
                <Linkedin className="h-5 w-5"/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 text-gray-900 tracking-tight">{t('quick_links')}</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.about')}</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.services')}</Link></li>
              <li><Link href="/laboratory" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.laboratory')}</Link></li>
              <li><Link href="/doctors" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.doctors')}</Link></li>
              <li><Link href="/volunteer" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.volunteer')}</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 text-gray-900 tracking-tight">{t('departments')}</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services#general" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.general')}</Link></li>
              <li><Link href="/services#womens-health" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.womens_health')}</Link></li>
              <li><Link href="/services#childrens-health" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.childrens_health')}</Link></li>
              <li><Link href="/services#radiology" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.radiology')}</Link></li>
              <li><Link href="/services#vaccination" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors text-sm inline-block py-1">{t('links.vaccination')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 text-gray-900 tracking-tight">{t('contact_us')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5"/>
                <span className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--color-primary)] shrink-0"/>
                <div className="flex flex-col gap-0.5">
                  <BidiLTR className="text-gray-700 font-medium text-sm">+92 307 2021882</BidiLTR>
                  <BidiLTR className="text-gray-700 font-medium text-sm">+92 336 3398787</BidiLTR>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-primary)] shrink-0"/>
                <BidiLTR className="text-gray-700 font-medium text-sm">jswswelfare@gmail.com</BidiLTR>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            &copy; <BidiLTR>{new Date().getFullYear()}</BidiLTR> Jamila Sultan Welfare Society. {t('rights')}
          </p>
          <div className="flex items-center gap-6 text-xs sm:text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-[var(--color-primary)] font-medium transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="hover:text-[var(--color-primary)] font-medium transition-colors">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
