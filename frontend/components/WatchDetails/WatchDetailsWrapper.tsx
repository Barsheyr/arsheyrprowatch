"use client";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamically import WatchDetailsClient
const WatchDetailsClient = dynamic(() => import("./WatchDetailsClient"), {
  ssr: false,
});

const WatchDetailsWrapper = ({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) => {
  return <WatchDetailsClient slug={slug}>{children}</WatchDetailsClient>;
};

export default WatchDetailsWrapper;
