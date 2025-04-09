/** @format */

"use client";

import { useState } from "react";
import { Hero } from "./Hero";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Dot,
  Rocket,
  PackageCheck,
  Phone,
  Filter,
  Check,
  ChevronsUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const projectCategories = [
  { label: "All Projects", value: "all" },
  { label: "Web & App Development", value: "web" },
  { label: "Customer Support", value: "support" },
  { label: "Digital Marketing", value: "marketing" },
  { label: "IT Infrastructure", value: "it" },
  { label: "Database Management", value: "database" },
  { label: "Logistics & Dispatch", value: "logistics" },
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <Tabs
          defaultValue="all"
          className="mb-16"
          onValueChange={setActiveTab}
          value={activeTab}
        >
          {/* Mobile Filter Dropdown */}
          <div className="md:hidden mb-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    {projectCategories.find(
                      (category) => category.value === activeTab
                    )?.label || "Filter Projects"}
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {projectCategories.map((category) => (
                        <CommandItem
                          key={category.value}
                          value={category.value}
                          onSelect={(value) => {
                            setActiveTab(value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              category.value === activeTab
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center mb-12">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web & App</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="it">IT Infrastructure</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-24">
            <WebAppProjects />
            <SupportProjects />
            <MarketingProjects />
            <ITProjects />
            <DatabaseProjects />
            <LogisticsProjects />
          </TabsContent>

          <TabsContent value="web">
            <WebAppProjects />
          </TabsContent>

          <TabsContent value="support">
            <SupportProjects />
          </TabsContent>

          <TabsContent value="marketing">
            <MarketingProjects />
          </TabsContent>

          <TabsContent value="it">
            <ITProjects />
          </TabsContent>

          <TabsContent value="database">
            <DatabaseProjects />
          </TabsContent>

          <TabsContent value="logistics">
            <LogisticsProjects />
          </TabsContent>
        </Tabs>

        <CaseStudies />

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let&apos;s build your success story—contact us today!
          </p>
          <Button size="lg" className="px-8">
            Get in touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function WebAppProjects() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Website & App Development</h2>
          <p className="text-xl text-muted-foreground">
            Building Future-Ready Digital Experiences
          </p>
        </div>
        <Link
          href="/services/web-development"
          className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
        >
          View all web projects <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Modern E-Commerce Store"
          client="Trendify"
          description="A headless e-commerce setup with AI-driven product recommendations and an intuitive mobile-first design."
          results={[
            "200% sales increase",
            "Higher engagement",
            "Reduced cart abandonment",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="SaaS Dashboard"
          client="FinFlow Analytics"
          description="Custom-built React & Next.js dashboard with real-time data visualization and cloud integration."
          results={[
            "User adoption increased by 3x",
            "Time spent on platform grew by 150%",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="AI-Powered Booking System"
          client="TravelEase"
          description="A robust web app using AI-based itinerary planning and smart price predictions."
          results={["40% more bookings", "Improved user retention rate"]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />
      </div>
    </section>
  );
}

function SupportProjects() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            24/7 Customer Support & Call Center
          </h2>
          <p className="text-xl text-muted-foreground">
            Empowering Businesses with Seamless Support
          </p>
        </div>
        <Link
          href="/services/customer-support"
          className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
        >
          View all support projects <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="AI Chat & Voice Support"
          client="TechNova Electronics"
          description="AI chatbot integration with multilingual support and automated ticketing."
          results={[
            "Response time dropped by 75%",
            "Customer satisfaction increased by 60%",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Remote Support Team"
          client="HealthSync Telemedicine"
          description="Fully trained remote agents, HIPAA-compliant support processes, and integrated CRM tools."
          results={[
            "Customer retention improved by 50%",
            "Decreased appointment cancellations",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Help Desk System"
          client="SwiftLogistics"
          description="AI-powered ticketing system, real-time tracking integration, and automated escalations."
          results={[
            "Issue resolution time dropped by 40%",
            "Boosted client trust and retention",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />
      </div>
    </section>
  );
}

function MarketingProjects() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Digital Marketing & Lead Generation
          </h2>
          <p className="text-xl text-muted-foreground">
            Driving Growth Through Data-Backed Strategies
          </p>
        </div>
        <Link
          href="/services/digital-marketing"
          className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
        >
          View all marketing projects <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="SEO Domination"
          client="AutoGear Parts"
          description="Advanced keyword optimization, technical SEO fixes, and high-authority backlinks."
          results={[
            "400% traffic increase",
            "3x more conversions from organic searches",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Paid Ad Strategy"
          client="LuxeReal Estate"
          description="Data-driven Facebook & Google Ads campaigns with hyper-targeted audiences."
          results={["Lead acquisition cost dropped by 60%", "Sales doubled"]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Social Media Growth"
          client="FitPro Gym"
          description="Viral content strategy, influencer collaborations, and retargeting ads."
          results={["Membership sign-ups increased by 300% in 6 months"]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />
      </div>
    </section>
  );
}

function ITProjects() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            IT Infrastructure Management
          </h2>
          <p className="text-xl text-muted-foreground">
            Ensuring Reliability, Security & Performance
          </p>
        </div>
        <Link
          href="/services/it-infrastructure"
          className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
        >
          View all IT projects <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Cloud Migration"
          client="NexTech Solutions"
          description="Full AWS migration with automated backups and security enhancements."
          results={[
            "99.9% uptime",
            "Lower maintenance costs",
            "Improved security",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Cybersecurity Upgrade"
          client="TrustBank Financial"
          description="AI-powered threat detection, multi-layer encryption, and employee training."
          results={[
            "100% prevention of attempted cyberattacks",
            "Ensuring compliance",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Remote Work Enablement"
          client="GlobalTrade Ltd."
          description="Secure VPNs, cloud-based collaboration tools, and automated device management."
          results={["Employee productivity increased by 35%", "Zero downtime"]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />
      </div>
    </section>
  );
}

function DatabaseProjects() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Database Management</h2>
          <p className="text-xl text-muted-foreground">
            Optimizing Data for Speed & Security
          </p>
        </div>
        <Link
          href="/services/database-management"
          className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
        >
          View all database projects <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="High-Performance Database"
          client="MedixHealth"
          description="Migration to a HIPAA-compliant cloud-based database with automated backups."
          results={["Data retrieval sped up by 5x", "Strengthened compliance"]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Scalable Data Solutions"
          client="EcomPower"
          description="NoSQL implementation with dynamic indexing and caching."
          results={[
            "Website speed increased by 50%",
            "Handling 2x more traffic",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Real-Time Analytics"
          client="SmartRetail AI"
          description="Live data dashboards, predictive analytics, and AI-driven insights."
          results={[
            "Customer buying trends identified 30% faster",
            "Improved inventory planning",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />
      </div>
    </section>
  );
}

function LogisticsProjects() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Dispatch & Logistics Management
          </h2>
          <p className="text-xl text-muted-foreground">
            Optimizing Supply Chains for Maximum Efficiency
          </p>
        </div>
        <Link
          href="/services/logistics-management"
          className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
        >
          View all logistics projects <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Smart Fleet Management"
          client="MoveRight Transport"
          description="GPS-based real-time tracking with predictive maintenance alerts."
          results={["40% reduction in fuel costs", "Optimized delivery routes"]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="Warehouse Automation"
          client="QuickShip Express"
          description="AI-driven inventory management and automated order processing."
          results={[
            "Inventory errors dropped by 60%",
            "Processing time improved by 3x",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />

        <ProjectCard
          title="On-Demand Delivery Platform"
          client="LocalFast"
          description="Custom mobile app with real-time driver allocation and route optimization."
          results={[
            "Deliveries sped up by 35%",
            "Higher customer satisfaction",
          ]}
          imageSrc="/placeholder.svg?height=600&width=800"
        />
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Case Studies: Real Success, Proven Impact
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Dive deeper into how we&apos;ve helped our clients achieve remarkable
          results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-2 hover:border-primary transition-all duration-300">
          <CardHeader>
            <Badge className="w-fit mb-2">Real Estate</Badge>
            <CardTitle className="text-2xl">
              LuxeReal Estate – 3x More Qualified Leads in 90 Days
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              LuxeReal Estate needed <strong>high-quality buyer leads</strong>{" "}
              without overspending. We designed a data-driven
              <strong> Google & Facebook Ads</strong> strategy, optimized
              landing pages, and ran A/B tests to maximize conversions.
            </p>
            <div className="bg-muted p-4 rounded-lg h-auto md:h-36">
              <p className="font-semibold">Results:</p>
              <p>
                <Rocket className="align-middle inline mr-2" />
                <strong>Lead generation cost dropped by 60%</strong> while{" "}
                <strong>sales doubled</strong> within 3 months.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Read full case study <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-2 hover:border-primary transition-all duration-300">
          <CardHeader>
            <Badge className="w-fit mb-2">Logistics</Badge>
            <CardTitle className="text-2xl">
              SwiftLogistics - 40% Faster Deliveries with Smart Dispatch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              SwiftLogistics struggled with{" "}
              <strong>inefficient dispatching</strong> and{" "}
              <strong>late deliveries</strong>. We implemented{" "}
              <strong>
                AI-based route planning and real-time GPS tracking
              </strong>
              , ensuring optimal delivery scheduling.
            </p>
            <div className="bg-muted p-4 rounded-lg h-auto md:h-36">
              <p className="font-semibold">Results:</p>
              <p>
                <PackageCheck className="align-middle inline mr-2" />{" "}
                <strong>Delivery times improved by 40%</strong>, reducing costs
                and increasing customer satisfaction.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Read full case study <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-2 hover:border-primary transition-all duration-300">
          <CardHeader>
            <Badge className="w-fit mb-2">Customer Support</Badge>
            <CardTitle className="text-2xl">
              TechNova Electronics - AI Support Cuts Response Time by 75%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              TechNova had long <strong>customer support delays</strong>,
              frustrating users. We integrated an
              <strong> AI chatbot</strong> and automated support workflows,
              reducing manual effort.
            </p>
            <div className="bg-muted p-4 rounded-lg h-auto md:h-36">
              <p className="font-semibold">Results:</p>
              <p>
                <Phone className="align-middle inline mr-2" />{" "}
                <strong>Support response time decreased by 75%</strong>, and
                customer ratings soared.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Read full case study <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  results: string[];
  imageSrc: string;
}

function ProjectCard({
  title,
  client,
  description,
  results,
  imageSrc,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} for ${client}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm">
            View Project
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-primary font-medium">
          for {client}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground h-auto md:h-24 mb-4">
          {description}
        </p>
        <div className="space-y-2 h-auto md:h-28">
          <p className="font-semibold">Results:</p>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">
                  <Dot />
                </span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
