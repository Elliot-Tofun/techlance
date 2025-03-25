import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Route, Expand } from "lucide-react";

const Dispatch = () => {

  const imageUrl = "https://images.pexels.com/photos/4391486/pexels-photo-4391486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const imageUrl2 = "https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
        Dispatch & Logistics Management <br/>
        Optimized, Reliable, and Scalable Logistics Solutions
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

            <span className="text-2xl font-semibold tracking-tight">Efficient Dispatch, Faster Deliveries</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Truck className="shrink-0" />
                  <p className="-mt-0.5">
                  Monitor fleet movements with precision tracking for on-time deliveries.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Route className="shrink-0" />
                  <p className="-mt-0.5 ">
                  Reduce delays and costs with AI-driven route optimization.
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

            <span className="text-2xl font-semibold tracking-tight">Seamless Logistics, Maximum Productivity</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Package className="shrink-0" />
                  <p className="-mt-0.5">
                  Get complete control over shipments, inventory, and fulfillment.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Expand className="shrink-0" />
                  <p className="-mt-0.5">
                  Whether you're a local operation or an enterprise, our system grows with your needs.
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

export default Dispatch;
