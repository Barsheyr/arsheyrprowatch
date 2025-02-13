import { getWatch } from "@/lib/api";
import React from "react";

const WatchDetailsServer = async (props: { slug: string }) => {
  const { slug } = props;

  const watchDetails = await getWatch(slug);

  return (
    <>
      <h2 className="text-5xl text-black my-5">{watchDetails.name}</h2>
      <p className="text-4xl pt-5 text-black font-bold mb-2">
        {watchDetails.price} $
      </p>
      <h2 className="text-lg text-black mb-2">{watchDetails.description}</h2>
    </>
  );
};

export default WatchDetailsServer;
