import BigOwl from "../../assets/images/big-owl.png"
import {Link} from "react-router-dom";

export default function StartScreenHero () {
  return (
    <section className="px-20 pt-[230px] pb-[74px]">
      <img className="absolute top-0 right-0 w-1/2 max-w-[757px]" src={BigOwl} alt="BigOwl" />
      <div className="flex flex-col gap-2 max-w-[793px]">
        <p className="uppercase text-[#F9FAFB] text-[20px] font-light">Завдання, оцінки та розвиток — усе в одному місці</p>
        <h1 className="uppercase font-bold text-[74px] text-white z-10">EduTrack - система, що тримає твій прогрес у фокусі</h1>
      </div>
      <div className="flex flex-col gap-2 mt-20">
        <Link to={'/dashboard'} className="w-fit px-9 py-6 rounded-[16px] bg-[#F9C74F] text-[30px] text-[#313131D6] font-medium uppercase">
          Увійти в кабінет
        </Link>
        <p className="text-[#F9FAFB] font-light text-[20px]">
          Ще не маєш кабінету? <span className="underline font-medium">Створити</span>
        </p>
      </div>
    </section>
  )
}