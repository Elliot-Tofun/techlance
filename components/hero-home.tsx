/** @format */

"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Scheduler } from "@/components/Scheduler";

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="w-full h-full relative overflow-hidden z-40">
      <Ripple />
      <div className="container pt-56 w-full mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto">
          <div className="space-y-2 justify-center items-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tighter leading-tight mb-8">
              One Agency. For Every Digital Solution Your Business Needs.
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-lg xl:text-lg ">
              From custom website & app development to 24/7 customer support, we
              offer comprehensive IT and digital marketing solutions tailored to
              your business needs. Enhance efficiency, drive revenue, and scale
              with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button size="lg" onClick={() => setDialogOpen(true)}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <Scheduler open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}

import { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        return (
          <div
            key={i}
            className="absolute lg:mt-40 sm:mt-16 animate-ripple rounded-full border bg-foreground/25 shadow-xl"
            style={
              {
                width: `calc(var(--main-circle-size) + ${i * 70}px)`,
                height: `calc(var(--main-circle-size) + ${i * 70}px)`,
                opacity: mainCircleOpacity - i * 0.03,
                animationDelay: `${i * 0.06}s`,
                borderStyle: i === numCircles - 1 ? "dashed" : "solid",
                borderWidth: "1px",
                borderColor: `hsl(var(--accent), ${(5 + i * 5) / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
