/** @format */

"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import {
  Menu,
  X,
  Globe,
  ArrowRight,
  BarChart,
  Server,
  Database,
  Headphones,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scheduler } from "@/components/Scheduler";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTheme } from "next-themes";

const services = [
  {
    title: "Website & App Development",
    description:
      "Custom digital solutions for business growth. We create responsive websites and powerful mobile apps.",
    icon: Globe,
    href: "/services#development",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our SEO, PPC, and social media marketing strategies.",
    icon: BarChart,
    href: "/services#marketing",
  },
  {
    title: "IT Infrastructure",
    description:
      "Robust IT solutions including cloud services, network security, and system integration.",
    icon: Server,
    href: "/services#infrastructure",
  },
  {
    title: "Database Management",
    description:
      "Efficient data handling with secure storage, backup solutions, and performance optimization.",
    icon: Database,
    href: "/services#dbmanagement",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance via phone, email, and live chat to ensure customer satisfaction.",
    icon: Headphones,
    href: "/services#support",
  },
  {
    title: "Dispatch & Logistics",
    description:
      "Streamline your operations with our advanced tracking and management systems.",
    icon: Truck,
    href: "/services#dispatch",
  },
];

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header
      className={cn(
        "fixed top-4 lg:top-0 lg:w-full z-50 left-1/2 transform -translate-x-1/2 w-[90%] shadow-sm mx-auto rounded-full lg:rounded-none transition-colors duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="flex h-12 lg:h-14 mx-8 items-center justify-between">
        <Link href="/" className="font-bold text-lg flex items-center text-primary">
          <Logo />
          <span className="hidden md:inline">Techlance</span>
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-6 text-base">
            <Link href="/" className=" font-medium hover:text-primary">
              Home
            </Link>
            <HoverCard openDelay={100} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Link
                  href="/services"
                  className="font-medium hover:text-primary flex items-center"
                >
                  Services
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-[550px] p-4" align="start">
                <div className="grid grid-cols-3 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="group flex flex-col gap-1 rounded-lg border p-3 hover:bg-muted hover:border-primary/20 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <service.icon className="h-4 w-4 text-primary" />
                        <h4 className="text-sm font-medium">{service.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                  <Link
                    href="#services"
                    className="group col-span-3 flex items-center justify-between rounded-lg border p-3 hover:bg-primary/5 hover:border-primary/20 transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-medium">
                        Explore All Services
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        View our complete service offerings
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Link href="/work" className=" font-medium hover:text-primary">
              Work
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About
            </Link>
          </div>
        </nav>

        {/* Right-Side Controls */}
        <div className="hidden md:flex items-center space-x-4 ">
          <Button className="text-base" onClick={() => setDialogOpen(true)}>
            Schedule Meeting
          </Button>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute w-full rounded-2xl mt-2 bg-background transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <div className="px-8 flex flex-col space-y-4">
          <Link
            href="/"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Our Work
          </Link>
          <Link
            href="/about"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Button
            onClick={() => {
              setDialogOpen(true);
              setIsOpen(false);
            }}
          >
            Schedule a Meeting
          </Button>
        </div>
      </div>

      <Scheduler open={dialogOpen} onOpenChange={setDialogOpen} />
    </header>
  );
};




export default function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-gray-800 dark:text-white" version="1.0" viewBox="0 0 1280 1280">
      <path fill="currentColor" stroke="#FFF" strokeWidth="0" d="M625.3 385.2c-60.4 3.3-113.6 27.4-155.4 70.4-19.5 20.1-31.9 38.7-43.2 64.4-5.9 13.6-9.5 24-12.6 36.5-2.3 9.5-5.1 26.8-5.1 31.8v3.6h26.6c14.7 0 26.8.2 27.1.4.2.3-.2 4.5-.8 9.5-1.1 8.2-.7 17.3 1.2 25.2.4 1.3-3.3 1.6-27.1 2l-27.5.5.3 4.5c.5 8.2 3.1 23.8 5.6 34.3 9.6 39.6 30.1 76.7 58.2 105.2 37.2 37.7 83.6 61 136.9 68.6 11.9 1.7 47.5 1.8 59 .1 41.1-5.9 76.3-20.3 108.9-44.6 44.6-33.1 74.8-80.1 87.1-135 2.5-11.3 4.5-24.9 4.5-30.9V629h-55.2l.8-5.8c1-6.3 1.2-20.3.4-27l-.5-4.4 27.3.1 27.3.1-.6-5.2c-1.7-14.3-2.9-21.3-5.6-32.2-9.6-38.4-28.9-71.8-58.8-101.7-26.5-26.4-56-44.8-90.6-56.4-10.4-3.5-32.4-8.4-44.5-10-10.1-1.4-31.4-2-43.7-1.3zm-90.8 175.3c21 5.5 36.5 24.3 38.1 46.4 2.2 29.1-21.9 55.1-51.1 55.1-11.9 0-26-6.2-35.1-15.4-20.3-20.8-20.1-52.1.4-72.6 7-7 12.1-10.2 21.2-13.1 6.9-2.2 18.7-2.4 26.5-.4zm121 1.1c35.5 12.4 46 57.7 19.5 84.5-27.5 27.9-73.2 16-84.4-22-2-6.9-2.1-19.9-.1-27.6 2.3-8.7 6.2-15.3 13.5-22.5 11.4-11.3 21.4-15.3 37-14.6 5.5.2 11.6 1.1 14.5 2.2zm112.6-1c22.5 6.6 38 27.1 37.9 50.2-.1 21.7-14.7 41.4-35.9 48.4-5.9 2-18.4 2.6-25.6 1.3-7.9-1.5-18-7-24.2-13.3-10.2-10.3-15.3-22.6-15.3-36.8 0-23.3 15.5-43.8 37.7-49.9 6.7-1.9 18.9-1.8 25.4.1z" />
      <path fill="currentColor" stroke="#000" strokeWidth="0" d="M 604.524 287.405 C 545.923 293.005 488.923 314.305 442.023 348.205 C 394.523 382.505 355.723 430.605 333.521 482.805 C 325.421 501.905 325.821 501.205 322.821 501.805 C 289.421 508.705 264.821 528.905 251.421 560.305 C 239.421 588.605 238.321 628.505 248.821 658.805 C 260.821 693.405 288.721 719.705 319.821 725.405 C 325.821 726.505 326.521 726.905 327.521 729.705 C 338.221 758.605 350.321 782.005 367.223 806.005 C 398.023 849.905 439.523 886.105 488.023 911.305 C 493.523 914.205 498.323 916.805 498.723 917.205 C 499.023 917.505 498.523 929.505 497.423 943.805 C 496.423 958.105 495.123 977.705 494.523 987.305 C 493.923 996.902 492.823 1012.9 492.123 1022.8 C 491.423 1032.7 491.023 1041 491.123 1041.1 C 491.323 1041.4 584.124 964.705 606.824 945.405 C 608.424 944.105 612.124 943.905 631.824 944.105 C 656.924 944.405 667.924 943.605 685.024 940.205 L 696.124 938.005 L 700.924 941.705 C 713.724 951.405 727.624 954.505 742.024 950.805 C 764.224 945.005 779.124 924.405 777.324 902.005 C 774.824 872.005 744.624 851.905 715.924 861.205 C 704.624 864.905 697.924 870.205 688.524 883.205 C 687.224 885.105 685.124 885.505 669.024 886.805 C 648.024 888.605 629.324 888.705 614.124 887.305 L 603.324 886.205 L 590.124 896.305 C 582.924 901.805 573.524 909.005 569.324 912.305 C 565.124 915.605 561.424 917.905 561.124 917.405 C 560.824 917.005 561.224 911.105 562.024 904.205 C 562.824 897.405 563.624 888.905 563.724 885.405 L 564.024 879.005 L 552.523 875.305 C 521.523 865.305 494.123 850.605 468.223 830.105 C 452.923 817.905 431.523 795.905 419.923 780.305 C 390.723 741.205 374.623 702.605 366.423 652.305 C 363.523 634.505 363.223 593.905 365.923 577.305 C 375.523 517.705 400.423 467.205 440.823 425.705 C 471.023 394.505 503.323 374.005 545.023 359.405 C 578.324 347.705 605.124 343.705 643.324 344.605 C 674.524 345.305 696.024 348.905 723.524 358.005 C 794.724 381.505 851.424 430.405 883.524 495.805 C 902.524 534.605 910.524 569.405 910.524 614.405 C 910.524 668.705 894.324 722.805 864.624 767.505 C 853.824 783.705 843.424 796.205 828.124 811.205 L 816.624 822.505 L 818.824 825.705 C 824.824 834.505 850.924 867.305 851.824 867.305 C 853.824 867.305 884.024 835.805 894.124 823.205 C 907.624 806.405 919.824 787.905 928.924 770.305 C 936.624 755.505 944.724 737.005 946.524 730.205 C 947.424 726.805 948.024 726.305 951.324 725.705 C 965.124 723.405 979.124 717.605 990.024 709.905 C 1043.02 672.005 1048.62 572.605 1000.42 526.805 C 987.524 514.605 974.324 507.205 957.624 502.905 L 948.124 500.505 L 943.324 488.805 C 927.824 450.605 906.424 417.705 878.024 388.405 C 821.124 329.605 748.224 294.605 667.524 287.305 C 654.324 286.205 617.124 286.205 604.524 287.405 Z" />
    </svg>
  );
}
