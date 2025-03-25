import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Archive, Key, Activity } from "lucide-react";

const DBManagement = () => {

  const imageUrl = "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const imageUrl2 = "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
        Database Management <br/>
        Reliable, Secure, and High-Performance Data Solutions
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

            <span className="text-2xl font-semibold tracking-tight">Seamless Data Handling & Optimization</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Database className="shrink-0" />
                  <p className="-mt-0.5">
                  Future-proof SQL & NoSQL databases optimized for speed and efficiency.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Archive className="shrink-0" />
                  <p className="-mt-0.5 ">
                  Redundant storage and real-time backups to prevent data loss.
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

            <span className="text-2xl font-semibold tracking-tight">Security & Compliance at Every Level</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Key className="shrink-0" />
                  <p className="-mt-0.5">
                  Advanced encryption, access controls, and threat monitoring.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Activity className="shrink-0" />
                  <p className="-mt-0.5">
                  Continuous monitoring for faster queries and peak efficiency.
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

export default DBManagement;
