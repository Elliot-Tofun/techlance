/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Rocket,
  Lightbulb,
  HandshakeIcon,
  Shield,
  Monitor,
  PhoneCall,
  Truck,
  TrendingUp,
  Server,
  Database,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Ripple } from "./background";

const imageUrl =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className=" w-full relative overflow-hidden from-primary/10 via-primary/5 to-background">
        <Ripple />
        <div className="container py-32 md:py-24 lg:py-32 px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center max-w-[900px] mx-auto">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tighter ">
                Empowering Businesses with Innovation & Expertise
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Your Success, Our Mission
              </p>
            </div>
            <p className="max-w-[800px] text-muted-foreground text-base md:text-lg lg:text-lg xl:text-lg">
              We don&apos;t just provide services—we create{" "}
              <span className="font-bold">scalable, high-impact solutions</span>{" "}
              that drive real business growth. From building high-converting
              websites and securing IT infrastructures to generating leads that
              convert, our expertise{" "}
              <span className="font-bold">
                powers your entire digital presence
              </span>
              . Partner with us, and let&apos;s take your business to the next level.
            </p>
            <div className="space-x-4 pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
                Who We Are
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                A team of visionaries, strategists, and tech experts
              </h2>
              <p className="text-muted-foreground md:text-lg">
                We combine cutting-edge technology with data-driven marketing to{" "}
                <span className="font-bold">
                  help businesses scale, automate, and dominate their
                  industries.
                </span>
              </p>
              <p className="text-muted-foreground md:text-lg">
                With <span className="font-bold">years of experience</span>{" "}
                across multiple industries, we understand what it takes to{" "}
                <span className="font-bold">
                  turn challenges into opportunities
                </span>
                —leveraging modern technology, automation, and AI to give your
                business the competitive edge it deserves.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/about1.jpg"
                  alt="Team of professionals working together"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Core Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-[800px] mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Core Values
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-2 p-2 rounded-full bg-primary/10">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">
                  Results-Driven Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We focus on measurable outcomes, not just deliverables. Every
                  strategy, campaign, and line of code is crafted for{" "}
                  <span className="font-bold">maximum business impact</span>.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-2 p-2 rounded-full bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">
                  Innovation & Adaptability
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Technology and markets change fast—we make sure you stay
                  ahead. Whether it&apos;s leveraging AI, automation, or growth
                  hacking strategies,{" "}
                  <span className="font-bold">
                    we ensure your business thrives in a digital-first world.
                  </span>
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-2 p-2 rounded-full bg-primary/10">
                  <HandshakeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">
                  Client-Centric Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Your success is our priority. We don&apos;t just work for you—we
                  work with you, ensuring that every solution is{" "}
                  <span className="font-bold">
                    tailored to your unique business needs.
                  </span>
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-2 p-2 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">
                  Security & Reliability
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  From IT infrastructure to data management, we prioritize{" "}
                  <span className="font-bold">
                    robust security and seamless performance
                  </span>
                  , so you can operate without worry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* What We Do Best Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-[800px] mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What We Do Best
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                We provide{" "}
                <span className="font-bold">end-to-end solutions</span> covering
                every aspect of your business&apos;s digital growth, operational
                efficiency, and customer engagement.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:gap-10 mt-10">
            {/* Website & App Development */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Monitor className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Website & App Development
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Your online presence is your{" "}
                    <span className="font-bold">digital storefront</span>—we
                    ensure it&apos;s built to{" "}
                    <span className="font-bold">
                      convert, scale, and impress
                    </span>
                    .
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Custom Web & App Development
                        </span>{" "}
                        – Crafted for performance & user engagement.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          SEO-Optimized & High-Converting
                        </span>{" "}
                        – Designed to rank higher & drive revenue.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={imageUrl}
                    alt="Website and app development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Customer support and call center"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <PhoneCall className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      24/7 Customer Support & Call Center
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-bold">
                      Your customers expect instant support—we make it happen.
                    </span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          AI & Human Hybrid Support
                        </span>{" "}
                        – Automating efficiency without losing the personal
                        touch.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Multilingual, Scalable Support Teams
                        </span>{" "}
                        – Seamlessly handling inquiries across time zones.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dispatch & Logistics */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Dispatch & Logistics Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    From <span className="font-bold">fleet optimization</span>{" "}
                    to <span className="font-bold">real-time tracking</span>, we
                    simplify logistics for maximum efficiency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          AI-Powered Route Planning
                        </span>{" "}
                        – Optimizing deliveries while cutting costs.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Warehouse & Inventory Automation
                        </span>{" "}
                        – Reducing errors and streamlining operations.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.pexels.com/photos/4391486/pexels-photo-4391486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dispatch and logistics management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Digital marketing and lead generation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Digital Marketing & Lead Generation
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-bold">
                      More leads, better conversion rates, and maximum ROI.
                    </span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          SEO, PPC & Social Media Domination
                        </span>{" "}
                        – Visibility that turns into revenue.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Data-Driven Ad Strategies
                        </span>{" "}
                        – Performance marketing tailored to your audience.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IT Infrastructure */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      IT Infrastructure Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Your business needs{" "}
                    <span className="font-bold">
                      secure, scalable, and seamless IT solutions.
                    </span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Cloud Migrations & Cybersecurity
                        </span>{" "}
                        – Ensuring uptime & data protection.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Remote Work & Network Optimization
                        </span>{" "}
                        – Secure access from anywhere.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="IT infrastructure management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Database Management */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Database management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Database Management</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We ensure your data is{" "}
                    <span className="font-bold">
                      secure, accessible, and optimized for performance.
                    </span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Real-Time Analytics & Reporting
                        </span>{" "}
                        – Data-driven decision-making.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-bold">
                          Enterprise-Grade Security & Backups
                        </span>{" "}
                        – Preventing data loss & downtime.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-[800px] mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Us?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground mb-2">
                  <span className="font-bold">1</span>
                </div>
                <CardTitle className="text-center">
                  One Partner for Everything
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We handle{" "}
                  <span className="font-bold">
                    your entire digital ecosystem
                  </span>
                  —so you can focus on growth.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground mb-2">
                  <span className="font-bold">2</span>
                </div>
                <CardTitle className="text-center">
                  Proven Results, Measurable Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Every project is backed by data, ensuring{" "}
                  <span className="font-bold">real business success.</span>
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground mb-2">
                  <span className="font-bold">3</span>
                </div>
                <CardTitle className="text-center">
                  Scalable Solutions for Every Business
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  From startups to enterprises, our solutions grow{" "}
                  <span className="font-bold">with you</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-[800px] mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Businesses That Trust Us
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                We&apos;ve helped{" "}
                <span className="font-bold">hundreds of companies</span> across
                industries{" "}
                <span className="font-bold">
                  streamline operations, increase revenue, and dominate their
                  markets
                </span>
                .{" "}
                <span className="font-bold">Your business could be next.</span>
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <PhoneCall className="mr-2 h-6 w-6" /> Let&apos;s build your success
                story—Contact us today!
              </h3>
              <Button size="lg" variant="default" asChild>
                <Link href="/contact">
                  Get Started Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
