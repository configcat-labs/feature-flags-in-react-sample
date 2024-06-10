import React from "react";

interface RaceStatusProps {
  raceMode: boolean;
}

export const RaceStatus = ({ raceMode }: RaceStatusProps) => {
  const raceStatus = raceMode ? "green-light" : "red-light";
  return <div className={raceStatus}>{raceStatus}</div>;
};
