import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Occupational Therapist Jobs | JSWS",
  description: "Apply for the Occupational Therapist position at Jamila Sultan Welfare Society and Sultan Ahmed Rehabilitation Centre, Karachi.",
};

export default function OccupationalTherapistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
