/** @format */

"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/app/services/particle-background";
import Link from "next/link";
import { Scheduler } from "../Scheduler";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Your Websites",
      "Your Apps",
      "IT Infrastructure",
      "Customer Support",
      "Marketing",
    ],
    []
  );

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

  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="w-full">
        <Particles
          className="absolute inset-0 -z-50"
          quantity={250}
          ease={80}
          color={color}
          refresh
        />
        <div className="container pt-40 w-full mx-auto px-4 md:px-6 flex flex-col ">
          <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto">
            <div className="space-y-2 justify-center items-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tighter leading-tight mb-8">
                Build Your Brand. We'll Handle the Rest !
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-bold"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
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

              <p className="text-muted-foreground text-base md:text-lg lg:text-lg xl:text-lg">
                From building and managing your online presence to handling
                customer support, digital marketing, SEO, and IT infrastructure,
                we’ve got you covered. Our comprehensive services ensure your
                business operates smoothly, grows efficiently, and stays ahead
                of the competition.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" onClick={() => setDialogOpen(true)}>
                Schedual a Meeting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Scheduler open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}

export { Hero };
