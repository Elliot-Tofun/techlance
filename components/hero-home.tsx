/** @format */

"use client";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Scheduler } from "@/components/Scheduler";
// import { useTheme } from "next-themes";

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.pexels.com/photos/4391486/pexels-photo-4391486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  return (
    <section className="w-full min-h-screen py-8 px-4 mt-8 flex items-center justify-center">
      <div className="relative w-[95%] h-[90vh] rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0">
          <ImageCarousel images={images} className="h-full w-full" />
        </div>
        <div className="relative container h-full flex items-center justify-center mx-auto px-4 md:px-6 z-20">
          <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-2xl">
            <div className="space-y-2 justify-center items-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tighter leading-tight mb-8 text-white">
                One Agency. For Every Digital Solution Your Business Needs.
              </h1>
              <p className="text-white/90 text-base md:text-lg lg:text-lg xl:text-lg">
                From custom website & app development to 24/7 customer support, we
                offer comprehensive IT and digital marketing solutions tailored to
                your business needs. Enhance efficiency, drive revenue, and scale
                with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" onClick={() => setDialogOpen(true)} className="bg-primary hover:bg-primary/90 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Scheduler open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

export function ImageCarousel({
  images,
  interval = 5000,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the transition duration in CSS
  }, [images.length, isTransitioning]);


  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [interval, nextSlide]);

  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Semi-transparent overlay with stronger gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ zIndex: 0 }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-1 left-1/2 z-20 flex -translate-x-1/2 space-x-3 pb-4 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all cursor-pointer hover:scale-125 ${index === currentIndex
              ? "bg-white scale-110 border-2"
              : "bg-primary/40 hover:bg-primary/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
