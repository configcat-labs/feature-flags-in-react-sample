import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="header">
      RACE TIME
      <Image
        src="/images/checkered-flag.png"
        width={100}
        height={100}
        alt="flag"
        className="flag"
      />
    </div>
  );
};
