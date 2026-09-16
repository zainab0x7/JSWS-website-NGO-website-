import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Jamila Sultan Welfare Society",
  description: "Explore career opportunities at Jamila Sultan Welfare Society and join our team of dedicated healthcare, rehabilitation and welfare professionals.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
