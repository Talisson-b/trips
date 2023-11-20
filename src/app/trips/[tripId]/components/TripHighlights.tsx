import Image from "next/image";
import React from "react";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker">Destaques</h2>

      <div className="flex flex-wrap gap-y-3 mt-2">
        {highlights.map((highlight) => (
          <div className="flex items-center gap-2 w-1/2" key={highlight}>
            <Image
              src="/check-icon.svg"
              width={15}
              height={15}
              alt={highlight}
            />
            <p className="text-grayPrimary text-xs">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
