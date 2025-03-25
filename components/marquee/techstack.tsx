/** @format */

import {
  AWS,
  MongoDB,
  GraphQL,
  NextJS,
  NodeJS,
  PostgreSQL,
  React,
  Supabase,
  TailwindCSS,
  TypeScript,
} from "@/components/marquee/techstack-icons";
import Marquee from "@/components/ui/marquee";

const Techstack = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="overflow-hidden text-center max-w-4xl">
        <p className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide">
          We Build Scalable Solutions Using the Latest Technologies
        </p>

        <div className="mt-24 flex items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
          <Marquee
            pauseOnHover
            className="[--duration:20s] flex items-center [&_svg]:mr-10"
          >
            <AWS />
            <MongoDB />
            <GraphQL />
            <NextJS />
            <NodeJS />
            <PostgreSQL />
            <React />
            <Supabase />
            <TailwindCSS />
            <TypeScript />
          </Marquee>
        </div>
        <p className="mt-10 text-base md:text-lg lg:text-lg xl:text-lg text-gray-400">
          Trusted by top businesses to create high-performance digital
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Techstack;
