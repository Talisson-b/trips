"use client";
import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Trips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await fetch(
        `/api/trips/search?text=${searchParams.get("text") ?? ""}&startDate${
          searchParams.get("startDate") ?? ""
        }&budget=${searchParams.get("budget") ?? ""} `
      );

      const data = await res.json();
      setTrips(data);
    };
    fetchTrips();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center lg:items-start">
      <h1 className="text-primaryDARKER font-semibold text-xl lg:text-[2.5rem]">
        Viagens Encontradas
      </h1>
      <h2 className="text-grayPrimary font-medium mb-5 lg:mt-6">
        {trips.length > 0
          ? "Listamos as melhores viagens para você"
          : "Não encontramos nenhuma viagem com as parâmetros passados😢"}
      </h2>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-10 lg:mt-6 lg:pb-10">
        {trips.map((trip) => (
          <TripItem trip={trip} key={trip.id} />
        ))}
      </div>
    </div>
  );
};

export default Trips;
