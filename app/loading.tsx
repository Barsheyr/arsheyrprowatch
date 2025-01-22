import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-52 h-52 border-4 border-black border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default loading;
