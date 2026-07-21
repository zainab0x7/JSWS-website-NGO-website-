"use client";

import { motion } from"framer-motion";
import { Button } from"@/components/ui/button";
import { Card, CardContent, CardHeader } from"@/components/ui/card";
import { CalendarClock, Award, Stethoscope } from"lucide-react";

const doctors = [
 {
 name:"Dr. Saira Irfan",
 specialty:"General Physician",
 qualifications:"MBBS",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
 availability:"Daily (10:30 AM - 1:00 PM)"
 },
 {
 name:"Dr. Taha Sabir",
 specialty:"Dental Surgeon",
 qualifications:"BDS, RDS",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop",
 availability:"Daily (10:00 AM - 4:00 PM)"
 },
 {
 name:"Dr. Javed",
 specialty:"Diabetic Consultant",
 qualifications:"Consultant",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
 availability:"Mon, Thu, Sat (11:00 AM - 1:00 PM)"
 },
 {
 name:"Dr. Shehla Aalam",
 specialty:"General Physician",
 qualifications:"MBBS",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1594824436998-05220c3a2e73?q=80&w=2574&auto=format&fit=crop",
 availability:"Mon, Tue, Thu (4:30 PM - 6:30 PM)"
 },
 {
 name:"Dr. Shaheen Ismail",
 specialty:"Gynecologist & Sonologist",
 qualifications:"MBBS",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=2576&auto=format&fit=crop",
 availability:"Mon, Wed, Fri (4:30 PM - 6:30 PM)"
 },
 {
 name:"Dr. Asfia Waseem",
 specialty:"Psychiatrist",
 qualifications:"Consultant",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1527613426496-2287d6b81cea?q=80&w=2670&auto=format&fit=crop",
 availability:"Thu (4:30 PM - 6:30 PM)"
 },
 {
 name:"Dr. C.M Rathore",
 specialty:"General Physician",
 qualifications:"MBBS",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop",
 availability:"Mon, Wed, Fri (3:30 PM - 6:00 PM)"
 },
 {
 name:"Mr. Masroor Ahmed",
 specialty:"Opt. Refractionist",
 qualifications:"Ortho Refractionist",
 experience:"Experienced",
 image:"https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=2662&auto=format&fit=crop",
 availability:"Mon, Wed, Fri (4:00 PM - 6:30 PM)"
 }
];

import { useTranslations } from "next-intl";

export default function DoctorsPage() {
  const t = useTranslations("DoctorsPage");
 return (
 <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-gray-light)]">
 <div className="container mx-auto px-4 md:px-6 py-12">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <Stethoscope className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-6"/>
 <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-black)] mb-6">
 {t('hero_title')}
 </h1>
 <p className="text-gray-600 text-lg">
 {t('hero_desc')}
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {doctors.map((doctor, index) => (
 <motion.div
 key={doctor.name}
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 >
 <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white group">
 <CardHeader className="bg-red-50 border-b border-red-100 pb-6 pt-6">
 <h3 className="font-heading text-2xl font-bold text-[var(--color-black)]">{doctor.name}</h3>
 <p className="text-[var(--color-primary)] font-medium">{doctor.specialty}</p>
 </CardHeader>
 <CardContent className="pt-6 space-y-4">
 <div className="flex items-center gap-3">
 <Award className="w-5 h-5 text-gray-600"/>
 <div>
 <p className="text-sm text-gray-500">{t('qualifications')}</p>
 <p className="font-medium text-[var(--color-black)]">{doctor.qualifications}</p>
 </div>
 </div>
 <div className="flex items-center gap-3">
 <CalendarClock className="w-5 h-5 text-gray-600"/>
 <div>
 <p className="text-sm text-gray-500">{t('availability')}</p>
 <p className="font-medium text-[var(--color-black)]">{doctor.availability}</p>
 </div>
 </div>
 <div className="pt-4 border-t border-gray-100">
 <Button className="w-full rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white">
 {t('book')}
 </Button>
 </div>
 </CardContent>
 </Card>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 );
}
