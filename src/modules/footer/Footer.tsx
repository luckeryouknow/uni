import {FacebookIcon, InstagramIcon, MailIcon} from "../../assets";

export default function Footer () {
  return (
    <footer className="flex items-center justify-between px-20 py-6 bg-[linear-gradient(to_right,_#96B1DD,_#515F77)]">
      <div className="flex flex-col gap-2">
        <p className="text-[#F9FAFB] text-[14px]">EduTrack  © 2025 Створено в рамках університетського проєкту</p>
        <p className="text-[#F9FAFB] text-[14px] font-bold">
          <span className="text-[#F9C74F]">EduTrack</span>  — твій освітній трек
        </p>
      </div>
      <div className="flex items-center gap-[14px]">
        <MailIcon />
        <InstagramIcon />
        <FacebookIcon />
      </div>
    </footer>
  )
}