"use client";

import Input from "@/components/Input";
// import HighLights from "./components/HighLights";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const AddToNewTrips = () => {
  const { data } = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  if (!data?.user.admin) {
    router.push("/");
    return;
  }

  async function onSubmit(data: any) {
    const urlImages = [data.imageOne, data.imageTwo, data.imageTree];
    console.log(urlImages);
    const response = await fetch(`http://localhost:3000/api/trips/create`, {
      method: "POST",
      body: JSON.stringify({
        imagesUrl: urlImages,
        name: data.name,
        localizacao: data.localizacao,
        pais: data.pais,
        descricaoLocalizacao: data.descricaoLocalizacao,
        descricaoLocal: data.descricaoLocal,
        preco: Number(data.preco),
        maxHospedes: Number(data.maxHospedes),
        recomendado: data.recomendado,
        imagemCover: data.imagemCover,
        imagemUrls: urlImages,
        dataInicio: new Date(data.dataInicio),
        dataFinal: new Date(data.dataFinal),
      }),
    });
  }
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-xl ">Adicionar viagens</h1>
      <div className="mt-5">
        <label
          htmlFor="name"
          className="font-semibold block mb-2 text-primaryDarker text-xs"
        >
          Nome
        </label>
        <Input {...register("name")} id="name" placeholder="Hotel palace" />
      </div>

      <div className="mt-4 flex items-center  justify-between gap-2">
        <div className="flex-1">
          <label
            htmlFor="localizacao"
            className="font-semibold mb-2 text-primaryDarker text-xs"
          >
            Localização
          </label>
          <Input
            {...register("localizacao")}
            id="localizacao"
            placeholder="Brazil, Rio de Janeiro"
          />
        </div>

        <div>
          <label
            htmlFor="pais"
            className="font-semibold mb-2 text-primaryDarker text-xs"
          >
            País
          </label>
          <Input {...register("pais")} placeholder="BR" id="pais" />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="descricao-localizacao"
          className="font-semibold block mb-2 text-primaryDarker text-xs"
        >
          Descrição sobre a localizacao
        </label>
        <textarea
          {...register("descricaoLocalizacao")}
          id="descricao-localizacao"
          className="w-full resize-none rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary"
        ></textarea>
      </div>

      <div className="mt-4">
        <label
          htmlFor="descricao-local"
          className="font-semibold block mb-2 text-primaryDarker text-xs"
        >
          Descrição sobre o local
        </label>
        <textarea
          {...register("descricaoLocal")}
          id="descricao-local"
          className="w-full resize-none rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary"
        ></textarea>
      </div>

      <div className="flex justify-between mt-4">
        <div className="w-[30%]">
          <label
            htmlFor="price"
            className="font-semibold mb-2 text-primaryDarker text-xs"
          >
            Preço por dia
          </label>
          <Input
            {...register("preco")}
            placeholder="Preço por dia"
            id="price"
          />
        </div>

        <div className="w-[30%]">
          <label
            htmlFor="hospedes"
            className="font-semibold mb-2 text-primaryDarker text-xs"
          >
            Máx de hóspedes
          </label>
          <Input
            {...register("maxHospedes")}
            placeholder="Número máximo"
            id="hospedes"
          />
        </div>

        <div className="w-[30%]">
          <label
            htmlFor="recomendado"
            className="font-semibold mb-2 text-primaryDarker text-xs"
          >
            Recomendado
          </label>
          <Input
            {...register("recomendado")}
            placeholder="Recomendado"
            id="recomendado"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          className="font-semibold mb-2 text-primaryDarker text-xs"
          htmlFor="cover-image"
        >
          Imagem de capa
        </label>
        <Input
          {...register("imagemCover")}
          id="cover-image"
          placeholder="Imagem de capa"
        />
      </div>

      <div className="mt-4">
        <label
          className="font-semibold mb-2 text-primaryDarker text-xs"
          htmlFor="image-one"
        >
          Imagem
        </label>
        <Input
          {...register("imageOne")}
          id="image-one"
          placeholder="Primeira imagem"
        />
      </div>

      <div className="mt-4">
        <label
          className="font-semibold mb-2 text-primaryDarker text-xs"
          htmlFor="image-two"
        >
          Imagem
        </label>
        <Input
          {...register("imageTwo")}
          id="image-two"
          placeholder="Segunda imagem"
        />
      </div>

      <div className="mt-4">
        <label
          className="font-semibold mb-2 text-primaryDarker text-xs"
          htmlFor="image_tree"
        >
          Imagem
        </label>
        <Input
          {...register("imageTree")}
          id="image_tree"
          placeholder="Terceira Imagem"
        />
      </div>

      <div className="mt-4">
        <label
          className="font-semibold mb-2 text-primaryDarker text-xs"
          htmlFor="initial-date"
        >
          Data de início disponível
        </label>
        <Input
          {...register("dataInicio")}
          id="initial-date"
          placeholder="Data de início"
        />
      </div>

      <div className="mt-4">
        <label
          className="font-semibold mb-2 text-primaryDarker text-xs"
          htmlFor="end-date"
        >
          Data final
        </label>
        <Input
          {...register("dataFinal")}
          id="end-date"
          placeholder="Data final"
        />
      </div>

      {/* <HighLights /> */}
      <Button onClick={handleSubmit(onSubmit)} className="w-full mt-10">
        Adicionar
      </Button>
    </div>
  );
};

export default AddToNewTrips;
