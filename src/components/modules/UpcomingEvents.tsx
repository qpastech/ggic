import Image from "next/image";
import React from "react";
import BtnLink from "../ui/BtnLink";

export type UpcomingEventsProps = {
  id: string;
  name: string;
  image: string;
  registrationLink: string;
  location: string;
  day: string;
  time: string;
};
const UpcomingEvents = ({
  image,
  name,
  registrationLink,
  day,
  time,
}: UpcomingEventsProps) => {
  return (
    <div className="w-100">
      <Image
        src={image}
        height={10000}
        width={10000}
        className={"rounded-2xl w-full h-100 object-cover"}
        alt={name}
      />
      <div className="space-y-3">
        <h4 className="mt-5 w-full truncate">{name}</h4>
        <p className="text-lg">{day}</p>
        <p className="text-lg">{time}</p>

        <BtnLink href={registrationLink}>Join Us</BtnLink>
      </div>
    </div>
  );
};

export default UpcomingEvents;
