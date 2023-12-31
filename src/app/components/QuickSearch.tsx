import Image from "next/image";
import Link from "next/link";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap ">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex justify-between mt-5 lg:justify-center lg:gap-36">
        <Link
          href={`/trips/search?text=hotel&startDate=${null}&budget=${null}`}
        >
          <div className="flex flex-col items-center gap-1">
            <Image
              className="w-[30px] h-[30px]"
              width={30}
              height={30}
              alt="Hotels"
              src="./hotel.svg"
            />
            <p className="text-sm lg:text-base tetx-grayPrimary">Hotéis</p>
          </div>
        </Link>

        <Link
          href={`/trips/search?text=chalé&startDate=${null}&budget=${null}`}
        >
          <div className="flex flex-col items-center gap-1">
            <Image
              className="w-[30px] h-[30px]"
              width={30}
              height={30}
              alt="Chalés"
              src="./chale.svg"
            />
            <p className="text-sm lg:text-base tetx-grayPrimary">Chalés</p>
          </div>
        </Link>
        <Link
          href={`/trips/search?text=fazendas&startDate=${null}&budget=${null}`}
        >
          <div className="flex flex-col items-center gap-1">
            <Image
              className="w-[30px] h-[30px]"
              width={30}
              height={30}
              alt="Hotels"
              src="./fazenda.svg"
            />
            <p className="text-sm lg:text-base tetx-grayPrimary">Fazendas</p>
          </div>
        </Link>

        <Link
          href={`/trips/search?text=pousadas&startDate=${null}&budget=${null}`}
        >
          <div className="flex flex-col items-center gap-1">
            <Image
              className="w-[30px] h-[30px]"
              width={30}
              height={30}
              alt="Hotels"
              src="./pousada.svg"
            />
            <p className="text-sm lg:text-base tetx-grayPrimary">Pousadas</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickSearch;
