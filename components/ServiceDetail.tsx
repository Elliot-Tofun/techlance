/** @format */
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Settings2,
  Rocket,
  Blocks,
  Globe,
  LineChart,
  Server,
  Database,
  HeadphonesIcon,
  Truck,
} from "lucide-react";

export default function ServicesDetails() {
  // Service data for each service including icons for each point
  const services = [
    {
      id: "development",
      category: "web-dev", // For website & app development
      title: "Website & App Development",
      subtitle: "That Drive Business Growth",
      InfoATitle: "How We Design",
      InfoAPoints: [
        "Your website is your digital identity make the right first impression and turn visitors into customers.",
        "We create high-performing websites and apps that not only reflect your brand but also drive sales, engagement, and growth.",
      ],
      InfoAIcons: [
        <Globe key="icon1" className="shrink-0" />,
        <Rocket key="icon2" className="shrink-0" />,
      ],
      InfoBTitle: "How We Build",
      InfoBPoints: [
        "We build sleek, fast, and conversion-driven websites and apps tailored to your brand.",
        "Using Future-Proof Tech for Maximum Growth, we ensure speed, security, and scalability.",
      ],
      InfoBIcons: [
        <Rocket key="icon3" className="shrink-0" />,
        <Settings2 key="icon4" className="shrink-0" />,
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      imageUrl2:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: "dispatch",
      category: "dispatch-logistics", // For dispatch & logistics
      title: "Dispatch & Logistics Management",
      subtitle: "Optimized, Reliable, and Scalable Logistics Solutions",
      InfoATitle: "Efficient Dispatch, Faster Deliveries",
      InfoAPoints: [
        "Monitor fleet movements with precision tracking for on-time deliveries.",
        "Reduce delays and costs with AI-driven route optimization.",
      ],
      InfoAIcons: [
        <Truck key="icon1" className="shrink-0" />,
        <Truck key="icon2" className="shrink-0" />,
      ],
      InfoBTitle: "Seamless Logistics, Maximum Productivity",
      InfoBPoints: [
        "Get complete control over shipments, inventory, and fulfillment.",
        "Whether you're a local operation or an enterprise, our system grows with your needs.",
      ],
      InfoBIcons: [
        <Truck key="icon3" className="shrink-0" />,
        <Truck key="icon4" className="shrink-0" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/4391486/pexels-photo-4391486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageUrl2:
        "https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "support",
      category: "customer-support", // For customer support
      title: "24/7 Customer Support & Call Centre",
      subtitle: "Reliable Support, Seamless Experience",
      InfoATitle: "Seamless, Multichannel Support",
      InfoAPoints: [
        "We handle calls, emails, live chat, and social media so your customers get help anytime, anywhere.",
        "Our quick response times and proactive support keep satisfaction high and frustration low.",
      ],
      InfoAIcons: [
        <HeadphonesIcon key="icon1" className="shrink-0" />,
        <HeadphonesIcon key="icon2" className="shrink-0" />,
      ],
      InfoBTitle: "Boost Customer Satisfaction & Retention",
      InfoBPoints: [
        "Our experienced agents understand your business and ensure every customer feels valued.",
        "Whether you're a startup or enterprise, our support adapts to your needs and grows with you.",
      ],
      InfoBIcons: [
        <HeadphonesIcon key="icon3" className="shrink-0" />,
        <HeadphonesIcon key="icon4" className="shrink-0" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageUrl2:
        "https://images.pexels.com/photos/7689641/pexels-photo-7689641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "marketing",
      category: "digital-marketing", // For digital marketing
      title: "Digital Marketing & Lead Generation",
      subtitle: "Maximize Your Reach, Convert More Customers",
      InfoATitle: "Targeted Strategies, Real Results",
      InfoAPoints: [
        "Leverage AI-powered analytics to reach the right audience at the right time.",
        "Dominate search results and maximize ROI with expertly crafted SEO and PPC strategies.",
      ],
      InfoAIcons: [
        <LineChart key="icon1" className="shrink-0" />,
        <LineChart key="icon2" className="shrink-0" />,
      ],
      InfoBTitle: "Brand Growth, Lead Acceleration",
      InfoBPoints: [
        "Build authority and loyalty with high-impact content and viral social strategies.",
        "Convert prospects into paying customers with AI-driven email and CRM automation.",
      ],
      InfoBIcons: [
        <Blocks key="icon3" className="shrink-0" />,
        <Blocks key="icon4" className="shrink-0" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageUrl2:
        "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "dbmanagement",
      category: "database-management", // For database management
      title: "Database Management",
      subtitle: "Reliable, Secure, and High-Performance Data Solutions",
      InfoATitle: "Seamless Data Handling & Optimization",
      InfoAPoints: [
        "Future-proof SQL & NoSQL databases optimized for speed and efficiency.",
        "Redundant storage and real-time backups to prevent data loss.",
      ],
      InfoAIcons: [
        <Database key="icon1" className="shrink-0" />,
        <Database key="icon2" className="shrink-0" />,
      ],
      InfoBTitle: "Security & Compliance at Every Level",
      InfoBPoints: [
        "Advanced encryption, access controls, and threat monitoring.",
        "Continuous monitoring for faster queries and peak efficiency.",
      ],
      InfoBIcons: [
        <Database key="icon3" className="shrink-0" />,
        <Database key="icon4" className="shrink-0" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageUrl2:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "infrastructure",
      category: "it-infrastructure", // For IT infrastructure
      title: "IT Infrastructure Management",
      subtitle: "Secure, Scalable, and Seamless IT Solutions",
      InfoATitle: "Optimized Performance, Maximum Uptime",
      InfoAPoints: [
        "Tailored hybrid cloud and on-site infrastructure for efficiency and scalability.",
        "Proactive real-time monitoring and expert support to prevent downtime.",
      ],
      InfoAIcons: [
        <Server key="icon1" className="shrink-0" />,
        <Server key="icon2" className="shrink-0" />,
      ],
      InfoBTitle: "Security & Future-Ready Technology",
      InfoBPoints: [
        "Multi-layered protection with firewall, encryption, and threat intelligence.",
        "Boost productivity with AI-driven automation and seamless integrations.",
      ],
      InfoBIcons: [
        <Server key="icon3" className="shrink-0" />,
        <Server key="icon4" className="shrink-0" />,
      ],
      imageUrl:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageUrl2:
        "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  // Create refs for each service detail container (static, no animations)
  const serviceRefs = useRef<HTMLDivElement[]>([]);
  serviceRefs.current = [];
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end solutions to address all your business
            technology needs.
          </p>
        </div>

        {/* Service Details */}
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={addToRefs}
            data-index={index}
            className="mb-24 last:mb-0"
            style={{
              zIndex: services.length - index,
              position: "relative",
            }}
          >
            <div id={service.id} className=" min-h-[50vh] flex items-center justify-center">
              <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
                <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
                  {service.title} <br />
                  {service.subtitle}
                </h2>
                <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                    {/* Media 1 Mobile */}
                    <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl overflow-hidden">
                      <img
                        src={service.imageUrl || "/placeholder.svg"}
                        alt={`${service.title} design`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="text-2xl font-semibold tracking-tight">
                      {service.InfoATitle}
                    </span>

                    <ul className="mt-6 space-y-4">
                      {service.InfoAPoints.map((point, i) => (
                        <li key={i}>
                          <div className="flex items-start gap-3">
                            {service.InfoAIcons[i] || (
                              <Settings2 className="shrink-0" />
                            )}
                            <p className="-mt-0.5">{point}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <Button className="mt-12 w-full">
                      Let's Do It <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Media 1 Desktop */}
                  <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden">
                    <img
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={`${service.title} design`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Media 2 Desktop */}
                  <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden">
                    <img
                      src={service.imageUrl2 || "/placeholder.svg"}
                      alt={`${service.title} build`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card 2 */}
                  <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                    {/* Media 2 Mobile */}
                    <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl overflow-hidden">
                      <img
                        src={service.imageUrl2 || "/placeholder.svg"}
                        alt={`${service.title} build`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="text-2xl font-semibold tracking-tight">
                      {service.InfoBTitle}
                    </span>

                    <ul className="mt-6 space-y-4">
                      {service.InfoBPoints.map((point, i) => (
                        <li key={i}>
                          <div className="flex items-start gap-3">
                            {service.InfoBIcons[i] || (
                              <Settings2 className="shrink-0" />
                            )}
                            <p className="-mt-0.5">{point}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <Button className="mt-12 w-full">
                      Build your strategy{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-slate-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our services can help you achieve your
                business goals. Our team is ready to provide tailored solutions
                that address your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Schedule a Consultation</Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Business consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
