/** @format */

"use client";
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
    href: "/services#infrasructure",
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

  return (
    <header
      className={cn(
        "fixed top-4 lg:top-0 lg:w-full z-50 left-1/2 transform -translate-x-1/2 w-[90%] shadow-sm mx-auto rounded-full lg:rounded-none transition-colors duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="flex h-12 lg:h-14 mx-8 items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          TechlanceHub
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
