import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 flex flex-col justify-center items-center">
      <Image src="/logo.svg" width={133} height={23} alt="full stack week" />
      <p className="text-sm font-medium text-primaryDarker mt-1">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
