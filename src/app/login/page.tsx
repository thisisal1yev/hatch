import type { Metadata } from "next";
import { LoginView } from "@/views/auth";

export const metadata: Metadata = {
  title: "Kirish",
  description: "Hatch hisobingizga kiring.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginView />;
}
