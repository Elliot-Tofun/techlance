/** @format */

import { Avatar, AvatarFallback } from "@/components/ui/avatar";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry. " +
      "The intuitive interface makes it easy to onboard new team members, and the automation features save us countless hours every week. ",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2
        className="mb-14 text-4xl md:text-5xl lg:text-5xl xl:text-5xl
 font-bold text-center tracking-tight"
      >
        Testimonials
      </h2>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 bg-muted rounded-xl p-6 break-inside-avoid"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonial;
