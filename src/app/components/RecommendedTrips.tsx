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
      <div className="overflow-x-scroll flex mt-5 gap-5 md:mt-12 md:gap-10 md:grid md:grid-cols-2 md:overflow-x-hidden lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
        {data.map((item: Trip) => (
          <TripItem key={item.id} trip={item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
