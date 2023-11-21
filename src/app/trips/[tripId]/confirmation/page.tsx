"use client";

import Button from "@/components/Button";
import { Trip } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/navigation";

const TripConfirmation = ({ params }: { params: { tripId: string } }) => {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState(0);
  const { status, data } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  if (status === "unauthenticated") {
    router.push("/");
  }

  useEffect(() => {
    async function fetchTrip() {
      const response = await fetch(`http://localhost:3000/api/trips/check`, {
        method: "POST",
        body: Buffer.from(
          JSON.stringify({
            startDate: searchParams.get("startDate"),
            endDate: searchParams.get("endDate"),
            tripId: params.tripId,
          })
        ),
      });
      const { trip, totalPrice } = await response.json();
      setTotalPrice(totalPrice);
      setTrip(trip);
    }

    fetchTrip();
  }, [status]);

  if (!trip) return null;

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests");

  return (
    <div className="container mx-auto p-5 ">
      <h1 className="font-semibold text-xl text-primaryDarker">Sua viagem</h1>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border border-solid border-grayLighter rounded-lg shadow-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              alt={trip.name}
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1 ">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-lg text-primaryDarker mt-3">
          Informações sobre os preço
        </h3>
        <div className="flex justify-between mt-1">
          <p className="Wtext-primaryDarker">Total:</p>
          <p className="font-medium">
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-5 text-primaryDarker">
        <h3 className="font-semibold">Data</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>{format(startDate, "d 'de' MMMM", { locale: ptBR })}</p>
          {"-"}
          <p>{format(endDate, "d 'de' MMMM", { locale: ptBR })}</p>
        </div>
        <h3 className="font-semibold mt-5">Hóspedes</h3>
        <p>{guests} hóspedes</p>

        <Button className="mt-5">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default TripConfirmation;
