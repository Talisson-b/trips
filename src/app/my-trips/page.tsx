"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TripReservation } from "@prisma/client";

const MyTrips = () => {
  const [reservations, setReservations] = useState<TripReservation[]>([]);
  const { status, data } = useSession();
  const router = useRouter();
  const userId = data?.user.id;

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/");
    }

    const fetchReservations = async () => {
      const response = await fetch(
        `http://localhost:3000/api/user/${userId}/reservations`
      );
      const res = await response.json();
      setReservations(res);
    };
    fetchReservations();
  }, [status]);

  return <div>MyTrips</div>;
};

export default MyTrips;
