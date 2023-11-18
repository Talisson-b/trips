import Image from "next/image";

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

      <div className="flex justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-[30px] h-[30px]"
            width={30}
            height={30}
            alt="Hotels"
            src="./hotel.svg"
          />
          <p className="text-sm tetx-grayPrimary">Hotéis</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-[30px] h-[30px]"
            width={30}
            height={30}
            alt="Chalés"
            src="./chale.svg"
          />
          <p className="text-sm tetx-grayPrimary">Chalés</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-[30px] h-[30px]"
            width={30}
            height={30}
            alt="Hotels"
            src="./fazenda.svg"
          />
          <p className="text-sm tetx-grayPrimary">Fazendas</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            className="w-[30px] h-[30px]"
            width={30}
            height={30}
            alt="Hotels"
            src="./pousada.svg"
          />
          <p className="text-sm tetx-grayPrimary">Pousadas</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
