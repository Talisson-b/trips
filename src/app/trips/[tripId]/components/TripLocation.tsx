import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <div className="relative w-full h-[280px]">
        <Image
          style={{ objectFit: "cover" }}
          src="/Map-mobile.png"
          alt={location}
          fill
          className="rounded-lg  shadow-lg"
        />
      </div>
      <p className="text-primaryDarker text-sm font-semibold mt-3">
        {location}
      </p>
      <p className="text-xs text-primaryDarker leading-5 mt-2">
        {locationDescription}
      </p>
      <Button variant="outlined" className="mt-5">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;
