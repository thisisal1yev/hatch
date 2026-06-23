import type { Metadata } from "next";
import { LegalPage, termsDoc } from "@/views/legal";

export const metadata: Metadata = {
  title: termsDoc.title,
  description: termsDoc.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={termsDoc} />;
}
