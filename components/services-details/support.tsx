import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, UserCheck, Headphones, Timer } from "lucide-react";

const Support = () => {

  const imageUrl = "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const imageUrl2 = "https://images.pexels.com/photos/7689641/pexels-photo-7689641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
        24/7 Customer Support <br/>
        Reliable Support, Seamless Experience
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

            <span className="text-2xl font-semibold tracking-tight">Seamless, Multichannel Support</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Headphones className="shrink-0" />
                  <p className="-mt-0.5">
                  We handle calls, emails, live chat, and social media so your customers get help anytime, anywhere.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Timer className="shrink-0" />
                  <p className="-mt-0.5 ">
                  Our quick response times and proactive support keep satisfaction high and frustration low.
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

            <span className="text-2xl font-semibold tracking-tight">Boost Customer Satisfaction & Retention</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <UserCheck className="shrink-0" />
                  <p className="-mt-0.5">
                  Our experienced agents understand your business and ensure every customer feels valued.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <TrendingUp className="shrink-0" />
                  <p className="-mt-0.5">
                  Whether you're a startup or enterprise, our support adapts to your needs and grows with you.
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

export default Support;
