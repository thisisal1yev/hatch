import type { Metadata } from "next";
import { LegalPage, privacyDoc } from "@/views/legal";

export const metadata: Metadata = {
  title: privacyDoc.title,
  description: privacyDoc.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyDoc} />;
}
