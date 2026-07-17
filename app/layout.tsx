import type { Metadata } from"next";
import { Playfair_Display, Inter, Noto_Nastaliq_Urdu } from"next/font/google";
import"./globals.css";
import { ThemeProvider } from"@/components/ThemeProvider";
import { Navbar } from"@/components/layout/Navbar";
import { Footer } from"@/components/layout/Footer";

const playfair = Playfair_Display({
 variable:"--font-playfair",
 subsets: ["latin"],
});

const inter = Inter({
 variable:"--font-inter",
 subsets: ["latin"],
});

const notoUrdu = Noto_Nastaliq_Urdu({
 variable:"--font-noto-urdu",
 subsets: ["arabic"],
 weight: ["400","700"],
});

export const metadata: Metadata = {
 title:"JSWS - Jamila Sultan Welfare Society",
 description:"Healthcare With Compassion, Hope & Humanity",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html
 lang="en"
 className={`${playfair.variable} ${inter.variable} ${notoUrdu.variable} h-full antialiased`}
 suppressHydrationWarning
 >
 <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
 <ThemeProvider
 attribute="class"
 defaultTheme="system"
 enableSystem
 disableTransitionOnChange
 >
 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 </ThemeProvider>
 </body>
 </html>
 );
}
