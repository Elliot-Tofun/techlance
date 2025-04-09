/** @format */

"use client";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Scheduler } from "@/components/Scheduler";
import { useTheme } from "next-themes";

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { theme } = useTheme();

  const lightModeImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%23ffffff'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%23f8fafc'/%3E%3Ccircle cx='800' cy='400' r='300' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.15'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%23ffffff'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%23f8fafc'/%3E%3Cpath d='M0 400c160-160 440-160 600 0s440 160 600 0' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.2'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%23ffffff'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%23f8fafc'/%3E%3Ccircle cx='800' cy='400' r='300' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.15'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%23ffffff'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%23f8fafc'/%3E%3Cpath d='M800 150L500 600h600L800 150z' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.2'/%3E%3C/svg%3E",
  ];

  const darkModeImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%230a0a0a'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%230a0a0a'/%3E%3Ccircle cx='800' cy='400' r='300' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.15'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%230a0a0a'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%230a0a0a'/%3E%3Cpath d='M0 400c160-160 440-160 600 0s440 160 600 0' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.2'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%230a0a0a'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%230a0a0a'/%3E%3Ccircle cx='800' cy='400' r='300' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.15'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Crect width='1600' height='800' fill='%230a0a0a'/%3E%3Cpath d='M0 0h1600v800H0z' fill='%230a0a0a'/%3E%3Cpath d='M800 150L500 600h600L800 150z' stroke='%232563eb' stroke-width='2' fill='none' stroke-opacity='0.2'/%3E%3C/svg%3E",
  ];

  const carouselImages = theme === "dark" ? darkModeImages : lightModeImages;

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageCarousel images={carouselImages} className="h-full w-full" />
      </div>
      <div className="relative container h-full flex items-center translate-y-[-10%] mx-auto px-4 md:px-6 z-20">
        <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto">
          <div className="space-y-2 justify-center items-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tighter leading-tight mb-8  ">
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

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

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
    <div className={`relative overflow-hidden ${className}`}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

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
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-3 pb-10 ">
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
