import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  const trip = await prisma.trip.create({
    data: {
      name: req.name,
      location: req.localizacao,
      countryCode: req.pais,
      description: req.descricaoLocal,
      locationDescription: req.descricaoLocalizacao,
      coverImage: req.imagemCover,
      imagesUrl: req.imagemUrls,
      maxGuests: req.maxHospedes,
      startDate: req.dataInicio,
      endDate: req.dataFinal,
      pricePerDay: req.preco,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    })
  );
}
