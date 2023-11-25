import { Trip } from "@prisma/client";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface TripHeaderProps {
  trip: Trip;
}

const TripHeader = ({ trip }: TripHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px] lg:hidden">
        <Image
          style={{
            objectFit: "cover",
          }}
          src={trip?.coverImage}
          fill
          alt={trip?.name}
        />
      </div>
      {/* header desktop */}
      <div className="hidden lg:grid grid-cols-[2fr,1fr,1fr] gap-2 grid-rows-2 lg:order-2">
        <div className="relative row-span-2 ">
          <Image
            style={{
              objectFit: "cover",
            }}
            src={trip?.coverImage}
            fill
            alt={trip?.name}
            className="rounded-tl-lg rounded-bl-lg shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="relative w-full h-[200px] ">
          <Image
            style={{
              objectFit: "cover",
            }}
            src={trip?.imagesUrl[0]}
            fill
            alt={trip?.name}
            className="shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="relative w-full h-[200px] ">
          <Image
            style={{
              objectFit: "cover",
            }}
            src={trip?.imagesUrl[1]}
            fill
            alt={trip?.name}
            className="shadow-md rounded-tr-lg hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="relative w-full h-[200px] ">
          <Image
            style={{
              objectFit: "cover",
            }}
            src={trip?.imagesUrl[2]}
            fill
            alt={trip?.name}
            className="shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="relative w-full h-[200px] ">
          <Image
            style={{
              objectFit: "cover",
            }}
            src={trip?.coverImage}
            fill
            alt={trip?.name}
            className="shadow-md rounded-br-lg hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <div className="flex flex-col p-5 lg:order-1 lg:p-0 lg:mb-10">
        <h1 className="font-semibold text-xl lg:text-3xl text-primaryDarker ">
          {trip.name}
        </h1>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs lg:text-base text-grayPrimary underline">
            {trip.location}
          </p>
        </div>
        <p className="text-xs text-grayPrimary lg:hidden">
          <span className="text-primary font-medium">
            R${trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </div>
  );
};

export default TripHeader;
