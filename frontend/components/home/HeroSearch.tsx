import React from "react";
import { FiSearch } from "react-icons/fi";

const HeoSearch = () => {
  return (
    <div>
      <div className="flex items-center  bg-black text-white">
        <div className="flex items-center bg-white rounded-full shadow-md w-[400px] p-2">
          <FiSearch className="text-gray-400 ml-3" size={20} />
          <input
            type="text"
            placeholder="Find the best brands"
            className="flex-1 bg-transparent focus:outline-none px-3 text-gray-600"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeoSearch;
