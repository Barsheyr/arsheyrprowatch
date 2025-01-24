"use client";
import React from "react";
import CountUp from "react-countup";

type BadgeProps = {
  containerStyles?: string;
  icon: React.ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText?: string;
};

const Badge: React.FC<BadgeProps> = ({
  containerStyles = "",
  icon,
  endCountNum,
  endCountText = "",
  badgeText = "",
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-blue-500 dark:text-black">{icon} </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-blue-500 dark:text-black">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
