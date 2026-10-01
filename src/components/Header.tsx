import checkeredFlag from "../assets/images/checkered-flag.png";

export const Header = () => {
  return (
    <div className="header">
      RACE TIME
      <img
        src={checkeredFlag}
        width={100}
        height={100}
        alt="flag"
        className="flag"
      />
    </div>
  );
};
