import { Car } from "./Car";
import { RaceStatus } from "../RaceStatus";
import { useFeatureFlag } from "configcat-react";
import type { TImage } from "../../types/TImage";
import babyCar from "../../assets/images/baby-car.png";
import sedan from "../../assets/images/sedan.png";
import sportsCar from "../../assets/images/sports-car.png";

export const Cars = () => {
  const { value, loading } = useFeatureFlag("YOUR-FEATURE-FLAG-KEY", false);

  const images: TImage[] = [
    {
      link: babyCar,
      class: "baby-car",
    },
    {
      link: sedan,
      class: "sedan",
    },
    {
      link: sportsCar,
      class: "sports-car",
    },
  ];

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className={value ? "cars-container-race" : "cars-container"}>
        {images.map((image) => (
          <Car carImage={image} key={image.link} raceMode={value}></Car>
        ))}
      </div>
      <div className="finish-line"></div>
      <RaceStatus raceMode={value}></RaceStatus>
    </>
  );
};
