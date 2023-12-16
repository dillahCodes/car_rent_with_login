import icon from "../../assets/logoicon.png";

export const Title = () => {
  return (
    <div className="flex items-center gap-x-3 w-[120px]  self-start  ">
      <img src={icon} alt="icon logo" />
      <h1 className="font-medium text-[30px] capitalize">Motiv.</h1>
    </div>
  );
};
