"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface TripReservatinProp {
  trip: Trip;
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
}

interface TripReservationForms {
  guests: number;
  startDate: Date;
  endDate: Date;
}

const TripReservation = ({
  trip,
  tripStartDate,
  tripEndDate,
  pricePerDay,
}: TripReservatinProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<TripReservationForms>();

  function onSubmit(data: TripReservationForms) {
    console.log(data);
  }

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-2">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória.",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              onChange={field.onChange}
              selected={field.value}
              error={!!errors.startDate}
              errorMessage={errors.startDate?.message}
              placeholderText="Data de Início"
              className="w-full"
              minDate={tripStartDate}
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória.",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              onChange={field.onChange}
              selected={field.value}
              error={!!errors.endDate}
              errorMessage={errors.endDate?.message}
              placeholderText="Data final"
              className="w-full"
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />
      </div>
      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório",
          },
        })}
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-2"
        error={!!errors.guests}
        errorMessage={errors.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total:</p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? (
                differenceInDays(endDate, startDate) * pricePerDay
              ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
            : "R$0"}
        </p>
      </div>
      <div className="w-full pb-10 border-b border-grayLighter mt-3">
        <Button onClick={handleSubmit(onSubmit)} className="w-full">
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
