import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { RiErrorWarningLine } from "react-icons/ri";
import { SlWrench } from "react-icons/sl";

const cardData = [
  {
    iocn: <HiOutlineChatBubbleOvalLeft />,
    title: "Monday, 6th Apirl 2020",
    text: "Book for General Service",
    buttonText: "completed",
    buttonStatus: "Completed",
    iconColor: "text-black",
    disabled: false,
  },
  {
    iocn: <RiErrorWarningLine />,
    title: "Thursday, 24th October 2021",
    text: "Vehicle LV 001 has been marked for recall.",
    buttonText: "14:07-21/11/2021",
    buttonStatus: "unCompleted",
    iconColor: "text-[#FF5A5A]",
    disabled: true,
  },
  {
    iocn: <SlWrench />,
    title: "Monday, 13th August 2018",
    text: "Maintenance Completed, Collect",
    buttonText: "14:07-21/11/2021",
    buttonStatus: "unCompleted",
    iconColor: "text-black",
    disabled: true,
  },
];
export const NotiesCard = () => {
  return (
    <div className="w-full 2xl:w-[50%] bg-white h-auto p-5 rounded-2xl">
      <h1 className="capitalize text-[23px] font-[700]">Noties</h1>
      {cardData.map((item, index) => (
        <div className="flex items-center w-full mt-5 gap-x-5" key={index}>
          <div
            className={`w-[44px] h-[44px] rounded-full shadow-md flex justify-center items-center text-[20px] ${item.iconColor}`}
          >
            {item.iocn}
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-between w-full">
              <h1 className="text-[18px] font-[500]">{item.title}</h1>
              <p className="text-base">{item.text}</p>
            </div>

            <button
              disabled={item.disabled}
              className={`px-[10px] mt-2 py-[3px] capitalize ${
                item.buttonStatus === "Completed"
                  ? "bg-[#70CF97] text-white"
                  : "bg-[#ECEEF0] hover:cursor-not-allowed"
              }   rounded-md`}
            >
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
