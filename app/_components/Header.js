import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm p-4 z-20 rounded-b-lg">
      <div className="flex items-center justify-around w-full">
        <div className="w-36" >
          <Link href={"/"} className="text-xl gradient-text">
            Kavindu Udara
          </Link>
        </div>
        <div className="flex justify-evenly w-1/2">
          <ul className="flex flex-wrap gap-8 font-semibold">
            <li className="cursor-pointer gradient-text">
              <Link href={"/blogs"} >blog</Link>
            </li>
            <li>
              <Link href={"/projects"} >projects</Link>
            </li>
            <li>
              <Link href={"/"} >Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-18 h-18 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
          <img
            className="w-12 h-12 rounded-full border-2 border-transparent cursor-pointer"
            src="https://avatars.githubusercontent.com/u/155027870?v=4"
            alt="Kavindu Udara" />
        </div>
      </div>
    </header>
  );
};

export default Header;
