"use client";
import React, { useState, useEffect } from "react";
import { getWatches } from "../../lib/api";
import WatchCard from "@/components/WatchCard/WatchCard";
import { Watch } from "../../models/watch"; // Import Watch type

export default function Watches() {
  // State for watches and pagination
  const [watches, setWatches] = useState<Watch[]>([]);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch watches when page changes
  useEffect(() => {
    async function fetchWatches() {
      const { watches, totalPages } = await getWatches(currentPage, 8); // Fetch with pagination
      setWatches(watches);
      setTotalPages(totalPages);
    }
    fetchWatches();
  }, [currentPage]);

  // Handle pagination navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="px-20 mt-20">
      <div className="text-black text-center mx-auto max-w-5xl">
        <h2 className="text-5xl py-10 font-bold">Watches</h2>
        <p>
          Explore our exquisite collection of timepieces that seamlessly blend
          timeless elegance with contemporary innovation. Each watch in our
          selection is crafted with precision, reflecting a commitment to
          superior craftsmanship and refined aesthetics. Whether you appreciate
          the classic charm of vintage-inspired designs or seek the cutting-edge
          functionality of modern technology, our collection offers something
          for every discerning taste.
        </p>
      </div>

      {/* Watches Grid */}
      <div className="max-w-7xl mx-auto  py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 text-white">
          {watches.map((watch) => (
            <WatchCard
              key={watch._id}
              watchName={watch.name}
              imageUrl={watch.images[0].url}
              slug={watch.slug.current}
              price={watch.price}
            />
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center py-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
