import React, { FC } from "react";

interface IProps {
  heading: string;
  description: string;
  number: number;
  haveBorder?: boolean,
}
const QuarterBox: FC<IProps> = ({ heading, description, number, haveBorder=true}) => {
  return (
    <div className={`flex flex-col flex-1 justify-center rounded-md relative px-8 py-16 ${haveBorder? "border": ""}`}>
      <h4 className="font-bold text-lg">{heading}</h4>
      <p className="mt-2 text-gray-600 z-0">{description}</p>
      <div className="absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10">
        {number}
      </div>
    </div>
  );
};

export default QuarterBox;
