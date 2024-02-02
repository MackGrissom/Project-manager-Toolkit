import { ModeToggle } from "@/components/global/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  user?: null | User;
};

const Navigation = (props: Props) => {
  return (
    <div className="flex items-center p-4 justify-between relative">
      <aside className="flex items-center gap-2">
        <Image
          src={"./assets/zenkitlogo.svg"}
          width={40}
          height={40}
          alt="logo"
        />
        <span className="text-xl font-bold">ZenStream.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8 text-[black] hover:underline-[#fab915]">
          <Link href="#" className=" hover:text-[#fab915] hover:underline dark:text-white dark:hover:text-[#fab915]">Pricing </Link>
          <Link href="#" className=" hover:text-[#fab915] hover:underline dark:text-white dark:hover:text-[#fab915]">About </Link>
          <Link href="#" className=" hover:text-[#fab915] hover:underline dark:text-white dark:hover:text-[#fab915]">Docs </Link>
          <Link href="#" className=" hover:text-[#fab915] hover:underline dark:text-white dark:hover:text-[#fab915]">Features </Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center"> 
      <Link href={'/agency'} className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 transition-all"> Login</Link>
      <UserButton/>
      <ModeToggle/>
      </aside>
    </div>
  );
};

export default Navigation;
