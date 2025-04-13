/** @format */

"use client";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import {
  Menu,
  X,
  Globe,
  ArrowRight,
  BarChart,
  Server,
  Database,
  Headphones,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scheduler } from "@/components/Scheduler";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const services = [
  {
    title: "Website & App Development",
    description:
      "Custom digital solutions for business growth. We create responsive websites and powerful mobile apps.",
    icon: Globe,
    href: "/services#development",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our SEO, PPC, and social media marketing strategies.",
    icon: BarChart,
    href: "/services#marketing",
  },
  {
    title: "IT Infrastructure",
    description:
      "Robust IT solutions including cloud services, network security, and system integration.",
    icon: Server,
    href: "/services#infrastructure",
  },
  {
    title: "Database Management",
    description:
      "Efficient data handling with secure storage, backup solutions, and performance optimization.",
    icon: Database,
    href: "/services#dbmanagement",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance via phone, email, and live chat to ensure customer satisfaction.",
    icon: Headphones,
    href: "/services#support",
  },
  {
    title: "Dispatch & Logistics",
    description:
      "Streamline your operations with our advanced tracking and management systems.",
    icon: Truck,
    href: "/services#dispatch",
  },
];

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-4 lg:top-0 lg:w-full z-50 left-1/2 transform -translate-x-1/2 w-[90%] shadow-sm mx-auto rounded-full lg:rounded-none transition-colors duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="flex h-12 lg:h-14 mx-8 items-center justify-between">
        <Link href="/" className="font-bold text-lg gap-1 flex items-center text-primary pt-2">
          <Logo />
          <span className="hidden md:inline">Techlance</span>
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-6 text-base">
            <Link href="/" className=" font-medium hover:text-primary">
              Home
            </Link>
            <HoverCard openDelay={100} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Link
                  href="/services"
                  className="font-medium hover:text-primary flex items-center"
                >
                  Services
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-[550px] p-4" align="start">
                <div className="grid grid-cols-3 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="group flex flex-col gap-1 rounded-lg border p-3 hover:bg-muted hover:border-primary/20 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <service.icon className="h-4 w-4 text-primary" />
                        <h4 className="text-sm font-medium">{service.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                  <Link
                    href="#services"
                    className="group col-span-3 flex items-center justify-between rounded-lg border p-3 hover:bg-primary/5 hover:border-primary/20 transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-medium">
                        Explore All Services
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        View our complete service offerings
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Link href="/work" className=" font-medium hover:text-primary">
              Work
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About
            </Link>
          </div>
        </nav>

        {/* Right-Side Controls */}
        <div className="hidden md:flex items-center space-x-4 ">
          <Button className="text-base" onClick={() => setDialogOpen(true)}>
            Schedule Meeting
          </Button>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute w-full rounded-2xl mt-2 bg-background transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <div className="px-8 flex flex-col space-y-4">
          <Link
            href="/"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Our Work
          </Link>
          <Link
            href="/about"
            className="text-md font-bold text-right hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Button
            onClick={() => {
              setDialogOpen(true);
              setIsOpen(false);
            }}
          >
            Schedule a Meeting
          </Button>
        </div>
      </div>

      <Scheduler open={dialogOpen} onOpenChange={setDialogOpen} />
    </header>
  );
};




export default function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black dark:text-white" version="1.0" viewBox="0 0 1280 1280">
      <path fill="currentColor" stroke="#000" strokeWidth="0" d="M 621.013 172.893 C 524.586 178.421 439.655 218.802 372.922 290.848 C 341.791 324.527 321.995 355.692 303.955 398.752 C 294.536 421.539 288.788 438.965 283.839 459.908 C 280.168 475.826 275.697 504.812 275.697 513.19 L 275.697 519.221 L 318.163 519.221 C 341.632 519.221 360.948 519.557 361.428 519.892 C 361.746 520.395 361.108 527.432 360.15 535.809 C 358.395 549.548 359.033 564.796 362.066 578.032 C 362.705 580.21 356.798 580.713 318.802 581.383 L 274.899 582.221 L 275.378 589.761 C 276.176 603.5 280.328 629.639 284.319 647.231 C 299.644 713.582 332.372 775.744 377.233 823.495 C 436.621 886.657 510.697 925.699 595.788 938.44 C 614.786 941.28 671.621 941.458 689.98 938.606 C 755.595 928.718 811.79 904.591 863.835 863.873 C 935.038 808.416 983.249 729.667 1002.88 637.681 C 1006.88 618.747 1010.07 595.96 1010.07 585.907 L 1010.07 581.383 L 921.942 581.383 L 923.218 571.665 C 924.816 561.11 925.139 537.653 923.862 526.426 L 923.063 519.054 L 966.646 519.221 L 1010.23 519.389 L 1009.27 510.676 C 1006.56 486.716 1004.65 474.988 1000.33 456.724 C 985.003 392.385 954.194 336.422 906.461 286.325 C 864.154 242.09 817.058 211.262 761.821 191.825 C 745.218 185.961 710.096 177.751 690.778 175.07 C 674.654 172.725 640.649 171.72 621.013 172.893 Z M 476.054 466.61 C 509.58 475.826 534.325 507.326 536.879 544.355 C 540.391 593.113 501.916 636.676 455.3 636.676 C 436.302 636.676 413.792 626.287 399.264 610.872 C 366.856 576.022 367.174 523.579 399.902 489.23 C 411.077 477.502 419.219 472.139 433.748 467.281 C 444.763 463.594 463.601 463.26 476.054 466.61 Z M 669.226 468.454 C 725.901 489.23 742.663 565.131 700.357 610.034 C 656.454 656.782 583.496 636.843 565.615 573.173 C 562.422 561.613 562.262 539.83 565.455 526.929 C 569.128 512.352 575.354 501.294 587.008 489.23 C 605.207 470.297 621.172 463.594 646.077 464.767 C 654.858 465.102 664.596 466.61 669.226 468.454 Z M 848.988 466.778 C 884.908 477.837 909.653 512.184 909.494 550.889 C 909.335 587.247 886.026 620.256 852.181 631.984 C 842.762 635.335 822.806 636.341 811.312 634.162 C 798.7 631.648 782.575 622.434 772.677 611.878 C 756.393 594.62 748.251 574.011 748.251 550.219 C 748.251 511.179 772.996 476.831 808.437 466.61 C 819.134 463.428 838.611 463.594 848.988 466.778 Z" />
      <path fill="currentColor" stroke="#000" strokeWidth="25" d="M 587.845 9.035 C 494.29 18.418 403.292 54.106 328.417 110.907 C 252.585 168.376 190.642 248.969 155.198 336.431 C 142.267 368.433 142.905 367.26 138.116 368.266 C 84.794 379.828 45.521 413.672 24.128 466.284 C 4.971 513.701 3.214 580.554 19.977 631.323 C 39.135 689.295 83.676 733.361 133.327 742.912 C 142.905 744.755 144.022 745.426 145.619 750.117 C 162.701 798.539 182.019 837.747 209.002 877.957 C 258.174 951.513 324.426 1012.17 401.855 1054.39 C 410.635 1059.25 418.298 1063.61 418.938 1064.28 C 419.416 1064.78 418.618 1084.89 416.862 1108.85 C 415.265 1132.81 413.19 1165.64 412.232 1181.72 C 411.274 1197.8 409.518 1224.61 408.401 1241.2 C 407.283 1257.79 406.644 1271.69 406.804 1271.86 C 407.123 1272.37 555.276 1143.86 591.516 1111.52 C 594.071 1109.35 599.977 1109.01 631.428 1109.35 C 671.5 1109.86 689.06 1108.51 716.36 1102.81 L 734.081 1099.12 L 741.744 1105.33 C 762.179 1121.58 784.37 1126.77 807.359 1120.58 C 842.8 1110.86 866.587 1076.34 863.714 1038.81 C 859.722 988.547 811.51 954.865 765.691 970.446 C 747.651 976.65 736.954 985.528 721.947 1007.31 C 719.872 1010.49 716.52 1011.16 690.816 1013.34 C 657.29 1016.36 627.437 1016.52 603.17 1014.18 L 585.929 1012.34 L 564.855 1029.25 C 553.361 1038.47 538.354 1050.54 531.649 1056.07 C 524.944 1061.59 519.037 1065.45 518.558 1064.61 C 518.079 1063.94 518.717 1054.06 519.995 1042.49 C 521.272 1031.1 522.55 1016.86 522.708 1011 L 523.188 1000.28 L 504.827 994.073 C 455.337 977.315 411.594 952.69 370.245 918.342 C 345.819 897.9 311.654 861.033 293.136 834.898 C 246.519 769.384 220.815 704.71 207.725 620.431 C 203.095 590.607 202.616 522.581 206.927 494.767 C 222.253 394.907 262.005 310.293 326.502 240.759 C 374.715 188.483 426.28 154.135 492.854 129.672 C 546.017 110.069 588.802 103.367 649.788 104.875 C 699.597 106.047 733.921 112.08 777.824 127.327 C 891.492 166.701 982.009 248.634 1033.26 358.212 C 1063.59 423.223 1076.37 481.531 1076.37 556.929 C 1076.37 647.909 1050.5 738.556 1003.09 813.452 C 985.85 840.594 969.247 861.544 944.819 886.669 L 926.451 905.602 L 929.969 910.962 C 939.547 925.711 981.21 980.667 982.653 980.667 C 985.85 980.667 1034.06 927.886 1050.17 906.778 C 1071.73 878.635 1091.21 847.631 1105.73 818.142 C 1118.03 793.345 1130.96 762.347 1133.84 750.954 C 1135.28 745.258 1136.23 744.42 1141.5 743.415 C 1163.53 739.56 1185.87 729.843 1203.28 716.941 C 1287.88 653.44 1296.83 486.892 1219.89 410.154 C 1199.3 389.712 1178.22 377.314 1151.56 370.109 L 1136.39 366.087 L 1128.73 346.484 C 1103.98 282.479 1069.82 227.354 1024.48 178.262 C 933.643 79.742 817.256 21.098 688.422 8.867 C 667.349 7.024 607.96 7.024 587.845 9.035 Z" />
    </svg>
  );
}

