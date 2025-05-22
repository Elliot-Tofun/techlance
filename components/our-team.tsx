/** @format */

import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
  },
  {
    name: "Peter Johnson",
    title: "Frontend Developer",
  },
  {
    name: "David Lee",
    title: "Backend Developer",
  },
  {
    name: "Sarah Williams",
    title: "Product Designer",
  },
  {
    name: "Michael Brown",
    title: "UX Researcher",
  },
  {
    name: "Elizabeth Johnson",
    title: "Customer Success",
  },
];
const OurTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <b className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
          We&apos;re hiring!
        </b>
        <h2
          className="mt-3 text-4xl md:text-5xl lg:text-5xl xl:text-5xl
 font-bold tracking-tight"
        >
          Meet Our Team
        </h2>
        <p className="mt-4 text-base md:text-lg lg:text-lg xl:text-lg">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>

      <div className="mt-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-screen-lg mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <Image
              src="/teamAvatar.svg"
              alt={`${member.name} at Techlance Hub`}
              className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
              width={120}
              height={120}
              loading="lazy"
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
