import React from "react";
import { Car } from "@/components/Cars/Car";
import { RaceStatus } from "@/components/RaceStatus";
import { useFeatureFlag } from "configcat-react";
import type { TImage } from "@/Types";

export const Cars = () => {
  const { value, loading } = useFeatureFlag("YOUR-FEATURE-FLAG-KEY", false);

  const images: TImage[] = [
    {
      link: "/images/baby-car.png",
      class: "baby-car",
    },
    {
      link: "/images/sedan.png",
      class: "sedan",
    },
    {
      link: "/images/sports-car.png",
      class: "sports-car",
    },
  ];

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="cars-container">
        {images.map((image) => (
          <Car carImage={image} key={image.link} raceMode={value}></Car>
        ))}
      </div>
      <div className="finish-line"></div>
      <RaceStatus raceMode={value}></RaceStatus>
    </>
  );
};
