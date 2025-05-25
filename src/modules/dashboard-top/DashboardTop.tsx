import ProfilePicture from "../../assets/images/profile-picture.png";
import ProfessorOwl from '../../assets/images/professor-owl.png'

export default function DashboardTop() {
  return (
    <section className="flex items-center justify-between px-20 pt-[44px] pb-[38px]">
      <div className="flex gap-3">
        <img className="w-[82px] h-[82px]" src={ProfilePicture} alt="profile picture"/>
        <div>
          <h2 className="text-[56px] uppercase text-[#313131D6] leading-none">
            Привіт <span className="font-bold">, Маріє!</span>
          </h2>
          <p className="text-[#31313163] text-[17px]">3 курс, спеціальність:  “Креативні цифрові технології” </p>
        </div>
      </div>
      <div className="relative flex rounded-[12px] bg-[#FFD97C]">
        <div className="relative w-fit">
          <div className="bg-[#F9C74F] text-[#313131D6] font-bold text-[17px] pl-[10px] py-[10px] rounded-[12px] pr-[35px]">
            Фокус дня
          </div>
          <div className="absolute top-0 right-0 h-full w-12 bg-[#FFD97C] [clip-path:polygon(100%_0%,0%_100%,100%_100%)]"></div>
        </div>
        <p className="max-w-[389px] text-[14px] my-[15px] mr-[84px]">
          “Краще відправити неідеальне — ніж ніколи не здати ідеальне.” — твоя сова в курсі дедлайнів
        </p>
        <img className="absolute right-[-14px] top-[-30px] w-[89px] h-[97px]" src={ProfessorOwl} alt="professor owl"/>
      </div>
    </section>
  )
}