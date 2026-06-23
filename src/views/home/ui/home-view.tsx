import { SiteHeader } from "@/widgets/site-header";
import { SiteFooter } from "@/widgets/site-footer";
import { getFreshJobs } from "@/entities/job";
import { Hero } from "./sections/hero";
import { ValueProps } from "./sections/value-props";
import { HowItWorks } from "./sections/how-it-works";
import { FreshJobs } from "./sections/fresh-jobs";
import { EmployerCta } from "./sections/employer-cta";
import { Faq } from "./sections/faq";
import { FinalCta } from "./sections/final-cta";

export async function HomeView() {
  const jobs = await getFreshJobs(6);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero previewJob={jobs[0]} />
        <ValueProps />
        <HowItWorks />
        <FreshJobs jobs={jobs} />
        <EmployerCta />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
