import React from "react";
import { RiSearchLine } from "@remixicon/react";
const SearchBox = () => {
  return (
    <>
      <div className="drop-shadow-md border px-1 py-1 border-1 flex items-center justify-between bg-white rounded-full ">
        <div className="flex ml-4 w-full items-center">
          <RiSearchLine color="grey" size={20} />
          <input
            className="w-full px-4 outline-none text-md "
            placeholder={`Search for ${"Medicine"}`}
            type="search"
            name=""
            id=""
          />
        </div>
        <button className="bg-emerald-700 hover:bg-emerald-800  text-white px-5 py-2 text-md font-semibold rounded-full">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBox;
