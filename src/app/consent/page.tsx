import type { Metadata } from "next";
import { LegalPage, consentDoc } from "@/views/legal";

export const metadata: Metadata = {
  title: consentDoc.title,
  description: consentDoc.description,
  alternates: { canonical: "/consent" },
};

export default function ConsentPage() {
  return <LegalPage doc={consentDoc} />;
}
