"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();
  const { status, data } = useSession();

  const handleAdminClick = () => {
    setMenuIsOpen(false);
    router.push("/admin");
  };

  const handlerLoginClick = () => signIn();

  const handlerLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter">
      <Link href="/" onClick={() => setMenuIsOpen(false)}>
        <Image width={183} height={32} src="/logo.svg" alt="" />
      </Link>
      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handlerLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && !data.user.admin && (
        <div className="flex items-center justify-between h-[48px] w-[90px] border border-solid border-grayLighter p-3 rounded-full relative ">
          <AiOutlineMenu
            className="cursor-pointer"
            size={16}
            onClick={handleMenuClick}
          />
          <Image
            className="rounded-full shadow-md"
            width={30}
            height={30}
            alt={data.user?.name!}
            src={data.user?.image!}
          />
          {menuIsOpen && (
            <>
              <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center z-10">
                <Link href="/my-trips">
                  <button
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    className="text-primary text-sm font-semibold "
                  >
                    Minhas viagens
                  </button>
                </Link>
              </div>

              <div className="absolute top-28 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center z-10">
                <button
                  className="text-primary text-sm font-semibold "
                  onClick={handlerLogoutClick}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {status === "authenticated" && data.user && data.user.admin && (
        <div className="flex items-center justify-between h-[48px] w-[90px] border border-solid border-grayLighter p-3 rounded-full relative">
          <AiOutlineMenu
            className="cursor-pointer"
            size={16}
            onClick={handleMenuClick}
          />
          <Image
            className="rounded-full shadow-md"
            width={30}
            height={30}
            alt={data.user?.name!}
            src={data.user?.image!}
          />
          {menuIsOpen && (
            <>
              <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center z-10">
                <Link href="/my-trips">
                  <button
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    className="text-primary text-sm font-semibold "
                  >
                    Minhas viagens
                  </button>
                </Link>
              </div>

              <div className="absolute top-28 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center z-10">
                <button
                  className="text-primary text-sm font-semibold "
                  onClick={handleAdminClick}
                >
                  Admin
                </button>
              </div>

              <div className="absolute top-[168px] left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center z-10">
                <button
                  className="text-primary text-sm font-semibold "
                  onClick={handlerLogoutClick}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
