import { useRouter } from "next/router";
import React, { useState } from "react";

export const SortButton = () => {
  const router = useRouter();

  const isHomePage = router.asPath === "/";

  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSort = (value: string) => {
    router.push(
      {
        pathname: "/",
        query: { ...router.query, sort: value },
      },
      undefined,
      {}
    );
  };
  return (
    <div onClick={toggleDropDown}>
      {isHomePage && (
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          Sort
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      )}

      {showDropDown && (
        <div id="dropdownDivider" className="z-10 absolute top-16  bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDividerButton">
            <li className="block px-4 py-2 hover:bg-gray-100" onClick={() => handleSort("asc")}>
              Users: A-Z
            </li>
          </ul>
          <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDividerButton">
            <li onClick={() => handleSort("desc")}>
              <span className="block px-4 py-2 hover:bg-gray-100 "> Users: Z-A</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
