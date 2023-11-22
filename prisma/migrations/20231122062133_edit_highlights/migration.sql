-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "highlights" SET DEFAULT ARRAY['Café da manhã incluso', 'Piscina', 'Wifi grátis', 'Estacionamento grátis', 'Vista paradisíaca', 'Luxuoso']::TEXT[];
