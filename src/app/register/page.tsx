import type { Metadata } from "next";
import { RegisterView } from "@/views/auth";

export const metadata: Metadata = {
  title: "Roʻyxatdan oʻtish",
  description: "Hatch’da talent yoki startup sifatida roʻyxatdan oʻting.",
  alternates: { canonical: "/register" },
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return <RegisterView />;
}
