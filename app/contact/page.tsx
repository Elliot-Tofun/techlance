"use client"
import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, CalendarPlus, Send, Mail, MapPin, Phone, Clock, Server, Database, Headset, Truck, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scheduler } from "@/components/Scheduler"
import { motion } from "framer-motion";
import Link from "next/link";


// Form schema for contact form
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [schedulerOpen, setSchedulerOpen] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    // Prepare payload for Web3Forms
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const data = {
      ...values,
      access_key: accessKey,
      subject: "New Contact Form Submission",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        console.log("Submission successful", result);
        setIsSubmitted(true);
      } else {
        console.error("Submission error", result);
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error("Submission error", error);
      // You might want to show an error message to the user here
    }

    setIsSubmitting(false);

    // Reset form after 3 seconds on successful submission
    if (isSubmitted) {
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 3000);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative mx-auto my-16 mt-16 flex max-w-7xl flex-col items-center justify-center bg-white">
      <div className="absolute inset-y-0 left-0 h-full w-px ">
        <div className="absolute top-0 h-40 w-px " />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px ">
        <div className="absolute h-40 w-px " />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full ">
        <div className="absolute mx-auto h-px w-40 " />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {["Get in Touch With Us", "Let's Talk Success"].map((line, lineIndex) => (
            <div key={`line-${lineIndex}`} className="mb-2">
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (lineIndex * line.split(" ").length + wordIndex) * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Have questions, need a quote, or ready to start your next project? Our team is just a message away. Whether you're looking for expert advice or specific service details, we're here to listen and provide the solutions you need.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => setSchedulerOpen(true)} className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Schedule Meeting
          </button>
          <Link href="/contact#sendMessage" className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center">
            Send Message
          </Link>
        </motion.div>
        
      </div>
    </div>

      {/* Contact Section */}
      <div className="container px-4 py-12 md:py-24 mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2> */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information Cards */}
          {/* Company Information Card */}
          <Card className="shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-2xl">About Our Company</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Who We Are</h3>
                <p className="text-muted-foreground">
                Techlance Hub is a BPO company that combines the strength of a software house with customer support services to deliver end-to-end digital solutions. We serve businesses of all sizes with tailored software development, web and mobile applications, and responsive support operations — all designed to help our clients thrive in a competitive digital world.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Our Approach</h3>
                <p className="text-muted-foreground">
                Our approach is driven by innovation and efficiency. We leverage cutting-edge technologies such as AI, cloud computing, modern JavaScript frameworks, and blockchain to build scalable, high-performance solutions. With a focus on user experience, security, and long-term growth, our expert team delivers smart, future-ready systems that align with your business goals.
                </p>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium text-lg mb-3">Contact Information</h3>
                <div className="space-y-4">
                  {/* <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <p className="text-muted-foreground">123 Business Avenue, Suite 456, New York, NY 10001</p>
                  </div> */}

                  {/* <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <p className="text-muted-foreground">
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div> */}

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@yourcompany.com" className="hover:text-primary transition-colors">
                        info@techlancehub.com
                      </a>
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <p className="text-muted-foreground">
                      Monday - Friday: 24 Hours | Weekends: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="shadow-md" id="sendMessage">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form below or schedule a meeting with our team.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="rounded-lg border bg-primary/5 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <CardFooter className="flex flex-col sm:flex-row gap-3 px-0 pt-4">
                      <Button type="submit" disabled={isSubmitting} className="flex-1">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setSchedulerOpen(true)}
                        className="flex items-center gap-2"
                      >
                        <CalendarPlus className="h-4 w-4" />
                        Schedule a Meeting
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scheduler Dialog */}
      <Scheduler open={schedulerOpen} onOpenChange={setSchedulerOpen} />
    </div>
  )
}
