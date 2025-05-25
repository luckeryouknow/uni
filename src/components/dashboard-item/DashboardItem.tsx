import * as React from "react";
import {RightTopArrow} from "../../assets";

type Props = {
  heading: string;
  isButtonShown: boolean;
  children: React.ReactNode;
}

export default function DashboardItem({ heading, isButtonShown, children }: Props) {
  return (
    <div className="w-fit">
      <div className="flex justify-between pt-5 pb-4 px-5 bg-[#96B1DDA6] rounded-t-[16px]">
        <h4 className="text-[22px] font-bold text-[#313131D6]">{heading}</h4>
        {isButtonShown && <button><RightTopArrow /></button>}
      </div>
      <div className="p-[10px] rounded-b-[16px] bg-[#3131310A]">
        {children}
      </div>
    </div>
  );
}
