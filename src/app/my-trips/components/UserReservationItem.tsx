import { Prisma, TripReservation } from "@prisma/client";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Button from "@/components/Button";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
}

const UserReservationItem = ({ reservation }: UserReservationItemProps) => {
  const { trip } = reservation;
  const startDate = format(new Date(trip.startDate), "dd 'de' MMMM", {
    locale: ptBR,
  });
  const endDate = format(new Date(trip.endDate), "dd 'de' MMMM", {
    locale: ptBR,
  });
  return (
    <div>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border border-solid border-grayLighter rounded-lg shadow-lg">
        <div className="flex items-center gap-5 pb-5 border-b border-grayLighter border-solid">
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
            <h2 className=" text-primaryDarker font-semibold">{trip.name}</h2>
            <div className="flex items-center gap-1 ">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-sm font-semibold text-primaryDarker mt-5">
          Sobre a viagem
        </h2>
        <div className="mt-5 leading-6">
          <p className="text-sm text-primaryDarker">Data</p>
          <span className="text-sm text-primaryDarker  inline-block">
            {startDate}
          </span>
          <span className="mx-1 text-sm text-primaryDarker">-</span>
          <span className="text-sm text-primaryDarker">{endDate}</span>
        </div>

        <div className="text-sm text-primaryDarker mt-5 pb-5 border-b border-solid border-grayLighter leading-6">
          <p>Hóspedes</p>
          <p>{reservation.guests} hóspedes</p>
        </div>

        <div className="mt-5 text-primaryDarker">
          <h2 className="font-semibold text-sm">Informações do pagamento</h2>
          <div className="flex justify-between text-sm mt-2">
            <p>Total</p>
            <span className="font-semibold">
              {Number(reservation.totalPaid).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
        <Button className="font-semibold text-sm mt-5" variant="danger">
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default UserReservationItem;
