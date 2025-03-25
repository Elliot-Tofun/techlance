/** @format */

"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart,
  Database,
  Headphones,
  MapPin,
  Server,
  Smartphone,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Website & App Development",
    description:
      "Custom digital solutions designed to help businesses grow with cutting-edge web and mobile applications.",
    longDescription: [
      "Our expert team creates responsive websites and mobile apps tailored to your business needs.",
      "We specialize in e-commerce platforms, progressive web apps, and native mobile applications.",
      "Using the latest technologies like React, Next.js, Flutter, and more to deliver high-performance digital products.",
      // "Full-cycle development from concept and design to deployment and maintenance.",
    ],
    image: "/placeholder.svg?height=300&width=600",
    link: "#", // Replace with your actual link
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support & Call Centre",
    description:
      "Reliable multi-channel client support services ensuring seamless customer experience and satisfaction.",
    longDescription: [
      "Round-the-clock customer service available through phone, email, chat, and social media.",
      "Trained support agents who understand your business and can resolve customer issues efficiently.",
      // "Multilingual support options to serve your global customer base.",
      "Advanced call routing and ticketing systems to ensure no customer query goes unanswered.",
    ],
    image: "/placeholder.svg?height=300&width=600",
    link: "#", // Replace with your actual link
  },
  {
    icon: MapPin,
    title: "Dispatch & Logistics Management",
    description:
      "Optimize your supply chain with real-time GPS tracking and efficient dispatch management.",
    longDescription: [
      "Real-time GPS tracking and route optimization for your delivery fleet.",
      "Automated dispatch systems that reduce response times and improve efficiency.",
      "Inventory management integration to ensure timely restocking and delivery.",
      // "Analytics and reporting tools to identify bottlenecks and improve logistics operations.",
    ],
    image: "/placeholder.svg?height=300&width=600",
    link: "#", // Replace with your actual link
  },
  {
    icon: BarChart,
    title: "Digital Marketing & Lead Generation",
    description:
      "Boost your brand visibility with expert SEO, paid advertising, and targeted lead generation strategies.",
    longDescription: [
      "Comprehensive SEO strategies to improve your organic search rankings and visibility.",
      "Targeted PPC campaigns across Google, Facebook, Instagram, and other platforms.",
      "Content marketing that engages your audience and establishes your brand as an industry leader.",
      // "Email marketing campaigns with high open rates and conversion-focused design.",
    ],
    image: "/placeholder.svg?height=300&width=600",
    link: "#", // Replace with your actual link
  },
  {
    icon: Server,
    title: "IT Infrastructure Management",
    description:
      "Comprehensive IT support, cloud solutions, and network security to ensure seamless business operations.",
    longDescription: [
      "Cloud infrastructure setup and management on AWS, Azure, or Google Cloud.",
      "Network security implementation with firewalls, VPNs, and intrusion detection systems.",
      // "Regular system maintenance and updates to prevent downtime and security vulnerabilities.",
      "Disaster recovery planning and implementation to protect your business data.",
    ],
    image: "/placeholder.svg?height=300&width=600",
    link: "#", // Replace with your actual link
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Secure, redundant backups and high-performance data solutions to keep your business running smoothly.",
    longDescription: [
      "Database design and optimization for maximum performance and scalability.",
      "Regular backups with multiple redundancies to ensure data safety.",
      "Data migration services between different database systems.",
      // "Performance monitoring and tuning to handle growing data volumes efficiently.",
    ],
    image: "/placeholder.svg?height=300&width=600",
    link: "#", // Replace with your actual link
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveService(index);
  };

  const handleClosePopover = () => {
    setActiveService(null);
  };

  return (
    <section
      id="services"
      className="py-24 bg-muted relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-tighter ">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-base md:text-lg lg:text-lg xl:text-lg vmax-w-[900px] text-gray-500  dark:text-gray-400">
              We offer a wide range of services to help your business succeed in
              the digital age.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              onClick={() => handleCardClick(index)}
            >
              <CardHeader className="p-4 pb-2 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4 pt-0">
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Button variant="link" className="h-8 px-0">
                  Learn more
                </Button>
                <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view details
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Center Popover */}
      {activeService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleClosePopover}
        >
          <div
            className="bg-background rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto animate-in zoom-in-90 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10"
                onClick={handleClosePopover}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[250px] md:h-full">
                  <Image
                    src={services[activeService].image || "/placeholder.svg"}
                    alt={services[activeService].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      {React.createElement(services[activeService].icon, {
                        className: "h-5 w-5 text-primary",
                      })}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {services[activeService].title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {services[activeService].description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">What we offer:</h4>
                    <ul className="space-y-3">
                      {services[activeService].longDescription.map(
                        (item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="rounded-full bg-primary/10 p-1 mt-1">
                              <svg
                                className="h-3 w-3 text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span className="text-sm">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" className="w-full">
                      <Link href={services[activeService].link}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
