import Link from "next/link";
import React from "react";
import { SearchBar } from "./SearchBar";
import { SortButton } from "./SortButton";

export const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">DJØF</span>
        </Link>
        <div className="flex gap-4">
          <SortButton />
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};
