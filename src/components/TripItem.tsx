import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactCountryFlag from "react-country-flag";
interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="w-[300px]">
        <div className="flex flex-col">
          <div className="w-[280px]">
            <Image
              src={trip.coverImage}
              width={280}
              height={280}
              alt={trip.name}
              className="rounded-lg object-cover shadow-md"
            />
          </div>
          <h3 className="text-primaryDark font-medium text-sm mt-2">
            {trip.name}
          </h3>
          <div className="flex items-center gap-1 my-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className="text-xs text-grayPrimary">{trip.location}</p>
          </div>
          <p className="text-xs text-grayPrimary">
            <span className=" text-primary font-medium">
              R${String(trip.pricePerDay)}
            </span>{" "}
            por dia
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TripItem;
