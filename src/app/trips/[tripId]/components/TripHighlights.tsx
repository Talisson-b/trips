import Image from "next/image";
import React from "react";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5 lg:p-0 lg:mt-12">
      <h2 className="font-semibold text-primaryDarker  lg:text-xl">
        Destaques
      </h2>

      <div className="flex flex-wrap gap-y-3 mt-2 lg:mt-5">
        {highlights.map((highlight) => (
          <div
            className="flex items-center gap-2 lg:gap-3 w-1/2"
            key={highlight}
          >
            <Image
              src="/check-icon.svg"
              width={15}
              height={15}
              alt={highlight}
            />
            <p className="text-grayPrimary text-xs lg:text-base">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
