"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Prisma, TripReservation } from "@prisma/client";
import UserReservationItem from "./components/UserReservationItem";
import Link from "next/link";
import Button from "@/components/Button";

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);
  const { status, data } = useSession();
  const router = useRouter();
  const userId = data?.user.id;

  const fetchReservations = async () => {
    const response = await fetch(`/api/user/${userId}/reservations`);
    const res = await response.json();
    setReservations(res);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/");
    }

    fetchReservations();
  }, [status]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl">
        Minhas viagens
      </h1>
      {reservations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {reservations.map((reservation) => (
            <UserReservationItem
              key={reservation.id}
              reservation={reservation}
              fetchReservations={fetchReservations}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="font-medium text-primaryDarker mt-2">
            Você ainda não tem nenhuma reserva!😢
          </p>
          <Link href="/">
            <Button className="w-full mt-2">Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
