import React from "react";
import { getWatches } from "../../lib/api";
import WatchCard from "@/components/WatchCard/WatchCard";

export default async function Watches() {
  const watches = await getWatches();

  return (
    <section
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1519153017650-55aad829d4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // }}
      className="px-20 mt-20"
    >
      <div className="text-black">
        <div className="text-center mx-auto max-w-5xl">
          <h2 className="text-5xl py-10 font-bold"> Watches </h2>
          <p>
            Discover a collection of timepieces that combine classic design and
            modern functionality. Explore an array of watches, from elegant
            chronographs to minimalist styles, crafted for durability and
            precision. Make a statement with versatile designs, perfect for
            daily wear or special occasions, and experience the art of
            watchmaking that will keep you stylish and punctual.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 text-white">
          {watches.map((game) => (
            <WatchCard
              key={game._id}
              watchName={game.name}
              imageUrl={game.images[0].url}
              slug={game.slug.current}
              price={game.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
