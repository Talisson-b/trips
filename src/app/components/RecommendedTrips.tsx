import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";

async function getTrips() {
  const trips = await prisma.trip.findMany({});

  return trips;
}

const RecommendedTrips = async () => {
  const data = await getTrips();
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap ">
          Destinos recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="overflow-x-scroll flex items-center mt-5 lg:mt-12 gap-5 lg:grid lg:grid-cols-3 lg:overflow-x-hidden">
        {data.map((item: Trip) => (
          <TripItem key={item.id} trip={item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
