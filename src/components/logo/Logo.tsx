import { LogoIcon } from "../../assets";

export const Logo = () => {
  return (
    <div className="relative w-fit">
      <div className="pl-[80px] py-[19px] pr-[50px] bg-[#F9FAFBD9] rounded-r-[12px] shadow-[0px_4px_13.8px_0px_rgba(96,113,141,0.36)]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-[#F9FAFBD9]"></div>
        <LogoIcon />
      </div>
    </div>
  );
};
