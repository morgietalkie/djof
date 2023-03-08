import { useRouter } from "next/router";
import React, { useState } from "react";

export const SearchBar = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>(router.query.search ? (router.query.search as string) : "");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (router.query.search === search) return;

    // Append search value to url
    router.push({
      pathname: "/",
      query: { ...router.query, search },
    });
  };

  return (
    <div className="flex md:order-2">
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};
