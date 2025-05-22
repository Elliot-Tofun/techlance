/** @format */

"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { GridPattern } from "./grid-bg";
import { Button } from "@/components/ui/button";

function HeroContent() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Recent Work", "Case Studies"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full z-10">
      <div className="container mx-auto">
        <div className="flex gap-8 pt-32 pb-20 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl tracking-tighter text-center font-bold ">
              Results That Speak for Themselves. Here are some of our{" "}
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 80 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4">
              Schedual a Meeting <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative flex h-[550px]  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <HeroContent />
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}

export { Hero };
