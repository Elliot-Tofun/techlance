"use client"
import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, CalendarPlus, Mail, MapPin, Phone, Clock, Server, Database, Headset, Truck, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scheduler } from "@/components/Scheduler"

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", values)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset()
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      {/* <div className="bg-primary text-white py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              IT Solutions for Your Business
            </h1>
            <p className="text-xl mb-8">
              Comprehensive IT services to help your business grow, scale, and succeed in the digital world.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <Code className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">IT Development</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <Server className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">Infrastructure</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <Database className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">Database</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <Headset className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">Support</div>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <Truck className="h-8 w-8 mx-auto mb-2" />
                <div className="font-medium">Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Contact Section */}
      <div className="container px-4 py-12 md:py-24 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
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
          <Card className="shadow-md">
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
