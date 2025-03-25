import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, UserCheck, Headphones, Timer, BrainCircuit, Search, Megaphone, Mail } from "lucide-react";

const Marketing = () => {

  const imageUrl = "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const imageUrl2 = "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
        Digital Marketing & Lead Generation <br/>
        Maximize Your Reach, Convert More Customers
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl">
              <img
                src= {imageUrl} // Replace with your image URL
                alt="Media 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <span className="text-2xl font-semibold tracking-tight">Targeted Strategies, Real Results</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <BrainCircuit className="shrink-0" />
                  <p className="-mt-0.5">
                  Leverage AI-powered analytics to reach the right audience at the right time.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Search className="shrink-0" />
                  <p className="-mt-0.5 ">
                  Dominate search results and maximize ROI with expertly crafted SEO and PPC strategies.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-12 w-full">
              Lets Do It <ArrowRight />
            </Button>
          </div>

          {/* Media 1 Desktop */}
          <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2">
            <img
              src= {imageUrl} // Replace with your image URL
              alt="Media 1"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2">
            <img
              src= {imageUrl2} // Replace with your image URL
              alt="Media 2"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl">
              <img
                src= {imageUrl2} // Replace with your image URL
                alt="Media 2"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <span className="text-2xl font-semibold tracking-tight">Brand Growth, Lead Acceleration</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Megaphone className="shrink-0" />
                  <p className="-mt-0.5">
                  Build authority and loyalty with high-impact content and viral social strategies.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail className="shrink-0" />
                  <p className="-mt-0.5">
                  Convert prospects into paying customers with AI-driven email and CRM automation.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-12 w-full">
              Build your strategy <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
