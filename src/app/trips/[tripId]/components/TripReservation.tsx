"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";

interface TripReservatinProp {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservatinProp) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-2">
        <DatePicker
          onChange={() => {}}
          placeholderText="Data de Início"
          className="w-full"
        />
        <DatePicker
          onChange={() => {}}
          placeholderText="Data de Final"
          className="w-full"
        />
      </div>
      <Input
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-2"
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total:</p>
        <p className="font-medium text-sm text-primaryDarker">R$:2000</p>
      </div>
      <Button className="mt-3">Reservar agora</Button>
    </div>
  );
};

export default TripReservation;
