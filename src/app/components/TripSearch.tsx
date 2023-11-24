"use client";
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date | null;
  budget: number;
}

const TripSearch = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TripSearchForm>();

  const handleClickSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search/?text=${
        data.text
      }&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`
    );
  };

  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat bg-black/5 lg:py-28">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center lg:text-[2.5rem]">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[900px] mx-auto lg:p-4 lg:bg-primary lg:bg-opacity-20 lg:rounded-lg lg:mt-12">
        <Input
          {...register("text", {
            required: {
              value: true,
              message: "Texto é obrigátorio",
            },
          })}
          placeholder="Onde você quer ir?"
          error={!!errors?.text}
          errorMessage={errors.text?.message}
        />

        <div className="flex gap-4 lg:w-full">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                onChange={field.onChange}
                selected={field.value}
                placeholderText="Data de ida"
                className="w-full"
                minDate={new Date()}
              />
            )}
          />
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                allowDecimals={false}
                placeholder="Orçamento"
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
                className="w-full"
              />
            )}
          />
        </div>
        <Button onClick={handleSubmit(handleClickSubmit)} className="lg:w-1/2">
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default TripSearch;
