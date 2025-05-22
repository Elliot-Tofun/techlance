/** @format */

"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const services = [
  { label: "Website & App Development", value: "website-app-development" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "IT Infrastructure", value: "it-infrastructure" },
  { label: "Database Management", value: "database-management" },
  { label: "24/7 Customer Support", value: "customer-support" },
  { label: "Dispatch & Logistics", value: "dispatch-logistics" },
  { label: "Custom Project", value: "custom" },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().optional(),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface MeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Scheduler({ open, onOpenChange }: MeetingDialogProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    // Prepare payload for Web3Forms
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const data = {
      ...values,
      access_key: accessKey,
      subject: "New Meeting Request Submission",
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
        setIsComplete(true);
      } else {
        console.error("Submission error", result);
      }
    } catch (error) {
      console.error("Submission error", error);
    }
    setIsSubmitting(false);
  };

  // Fix the any type by specifying the correct type for fields
  const handleNext = async () => {
    const fields =
      step === 1
        ? ["name", "company"]
        : step === 2
          ? ["phone", "email"]
          : ["service", "description"];

    const isValid = await form.trigger(fields as Array<keyof FormValues>);

    if (isValid) {
      const currentValues = form.getValues();
      setFormData({ ...formData, ...currentValues });

      if (step < 3) {
        setStep(step + 1);
      } else {
        form.handleSubmit(onSubmit)();
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    form.reset();
    setStep(1);
    setIsComplete(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {!isComplete ? (
          <>
            <DialogHeader>
              <DialogTitle>Schedule a Meeting</DialogTitle>
              <DialogDescription>
                {step === 1 && "Let's start with your basic information."}
                {step === 2 && "How can we reach you?"}
                {step === 3 && "Tell us about your project needs."}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-between mb-4">
              <div
                className={`h-2 w-1/3 rounded-full mr-1 ${step >= 1 ? "bg-primary" : "bg-muted"
                  }`}
              ></div>
              <div
                className={`h-2 w-1/3 rounded-full mx-1 ${step >= 2 ? "bg-primary" : "bg-muted"
                  }`}
              ></div>
              <div
                className={`h-2 w-1/3 rounded-full ml-1 ${step >= 3 ? "bg-primary" : "bg-muted"
                  }`}
              ></div>
            </div>
            <Form {...form}>
              <form className="space-y-4">
                {step === 1 && (
                  <>
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
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormDescription>
                            You can leave this blank if you&apos;re an individual.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
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
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Service Type</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "w-full justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? services.find(
                                      (service) =>
                                        service.value === field.value
                                    )?.label
                                    : "Select a service"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandList>
                                  <CommandEmpty>No service found.</CommandEmpty>
                                  <CommandGroup>
                                    {services.map((service) => (
                                      <CommandItem
                                        key={service.value}
                                        value={service.value}
                                        onSelect={() => {
                                          form.setValue(
                                            "service",
                                            service.value
                                          );
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            service.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {service.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide a brief description of your project or service needs..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </form>
            </Form>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className={step === 1 ? "w-full sm:w-auto" : ""}
              >
                {step < 3 ? "Next" : isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Thank You!</DialogTitle>
              <DialogDescription>
                Your meeting request has been submitted successfully. We&apos;ll
                contact you shortly to confirm your appointment.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center py-8">
              <div className="rounded-full bg-primary/10 p-4">
                <Check className="h-12 w-12 text-primary" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleReset} className="w-full">
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
