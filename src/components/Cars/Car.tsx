import Image from "next/image";
import React from "react";
import type { TImage } from "@/Types";

interface CarProps {
  carImage: TImage;
  raceMode: boolean;
}

export const Car = ({ carImage, raceMode }: CarProps) => {
  let customClass = raceMode ? `car-image ${carImage.class}` : "car-image";

  return (
    <div className="car-container">
      <Image
        src={carImage.link}
        alt={carImage.class}
        className={`car-image ${customClass}`}
        width={100}
        height={100}
      ></Image>
    </div>
  );
};
