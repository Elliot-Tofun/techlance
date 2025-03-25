/** @format */

import { Hero } from "@/components/hero-home";
import Techstack from "@/components/marquee/techstack";
import OurTeam from "@/components/our-team";
import ServicesSection from "@/components/services-section";
import Testimonial from "@/components/testimonials";

const page = () => {
  return (
    <>
      <Hero />
      <Techstack />
      <ServicesSection />
      <Testimonial />
      <OurTeam />
    </>
  );
};

export default page;
