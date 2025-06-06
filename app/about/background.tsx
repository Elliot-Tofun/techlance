/** @format */

import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
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
