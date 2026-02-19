export const metadata = {
  title: "Nexo Digital Agency",
  description: "Creative digital marketing and branding solutions to grow your business and generate real results online — Nexo Digital.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
