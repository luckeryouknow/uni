import DashboardItem from "../../components/dashboard-item/DashboardItem.tsx";
import CircularProgress from "../../components/circular-progress/CircularProgress.tsx";
import GradeCircular from "../../components/grade-circular/GradeCircular.tsx";
import ScheduleOwl from "../../assets/images/schedule-owl.png";
import InteractivityOwl from "../../assets/images/interactivity-owl.png";

export default function DashboardContent() {
  return (
    <section className="flex flex-wrap gap-5 px-12 pb-6">
      <DashboardItem heading={"Поточні дисципліни"} isButtonShown={true}>
        <div className="flex flex-col gap-[10px]">
          <div className="relative flex items-center justify-between gap-[70px] py-[10px] pl-[20px] pr-[44px] rounded-[8px] bg-white">
            <div className="absolute bg-[#B7C9E6] w-[10px] h-full left-0 rounded-l-[8px]" />
            <span className="text-[#313131D6] text-[16px]">Motion-дизайн в After Effects</span>
            <CircularProgress percentage={60} />
          </div>
          <div className="relative flex items-center justify-between gap-[70px] py-[10px] pl-[20px] pr-[44px] rounded-[8px] bg-white">
            <div className="absolute bg-[#B7C9E6] w-[10px] h-full left-0 rounded-l-[8px]" />
            <span className="text-[#313131D6] text-[16px]">Інтерактивні інтерфейси</span>
            <CircularProgress percentage={45} />
          </div>
          <div className="relative flex items-center gap-[70px] py-[10px] pl-[20px] pr-[44px] rounded-[8px] bg-white">
            <div className="absolute bg-[#B7C9E6] w-[10px] h-full left-0 rounded-l-[8px]" />
            <span className="text-[#313131D6] text-[16px]">Креативне програмування (p5.js)</span>
            <CircularProgress percentage={80} />
          </div>
          <span className="mt-[5px] mb-[5px] text-[17px] font-semibold text-center text-[#313131D6]">
            Завершено: 16 з 30 модулів
          </span>
        </div>
      </DashboardItem>
      <DashboardItem heading={"Розклад на сьогодні"} isButtonShown={true}>
        <div className="flex gap-[10px] items-stretch mb-5">
          <div>
            <div className="px-[50px] py-[10px] text-center bg-[#B7C9E6] rounded-t-[8px]">
              <span className="text-[16px] font-medium">10:00</span>
            </div>
            <div className="px-[10px] pt-[30px] pb-3 rounded-b-[8px] bg-white">
              <p className="max-w-[115px] text-center text-[16px] text-[#313131D6]">Звук у візуальному сторітелінгу</p>
              <p className="mt-[43px] text-center text-[12px] text-[#313131D6]">онлайн</p>
            </div>
          </div>
          <div>
            <div className="px-[50px] py-[10px] text-center bg-[#B7C9E6] rounded-t-[8px]">
              <span className="text-[16px] font-medium">14:00</span>
            </div>
            <div className="px-[10px] pt-[30px] pb-3 rounded-b-[8px] bg-white">
              <p className="max-w-[115px] text-center text-[16px] text-[#313131D6]">Звук у візуальному сторітелінгу</p>
              <p className="mt-[43px] text-center text-[12px] text-[#313131D6]">онлайн</p>
            </div>
          </div>
          <div>
            <div className="px-[50px] py-[10px] text-center bg-[#B7C9E6] rounded-t-[8px]">
              <span className="text-[16px] font-medium">17:00</span>
            </div>
            <div className="px-[10px] pt-[30px] pb-3 rounded-b-[8px] bg-white">
              <p className="max-w-[115px] text-center text-[16px] text-[#313131D6]">Звук у візуальному сторітелінгу</p>
              <p className="mt-[43px] text-center text-[12px] text-[#313131D6]">онлайн</p>
            </div>
          </div>
        </div>
      </DashboardItem>
      <DashboardItem heading={"Найближчі дедлайни"} isButtonShown={true}>
        <div className="flex flex-col gap-[10px]">
          <div className="relative flex items-center justify-between gap-[52px] py-[15px] pl-[20px] pr-[20px] rounded-[8px] bg-white">
            <div className="absolute bg-[#D50A0A] w-[10px] h-full left-0 rounded-l-[8px]" />
            <span className="text-[#313131D6] text-[16px]">Мікровзаємодії в інтерфейсі</span>
            <span className="pl-[7px] py-[5px] pr-[2px] border-[#31313124] border-solid border-[1px] rounded-[8px]">до 01.04</span>
          </div>
          <div className="relative flex items-center justify-between gap-[52px] py-[15px] pl-[20px] pr-[20px] rounded-[8px] bg-white">
            <div className="absolute bg-[#F9C74F] w-[10px] h-full left-0 rounded-l-[8px]" />
            <span className="text-[#313131D6] text-[16px]">Мініанімація логотипу</span>
            <span className="pl-[7px] py-[5px] pr-[2px] border-[#31313124] border-solid border-[1px] rounded-[8px]">до 01.04</span>
          </div>
          <div className="relative flex items-center justify-between gap-[52px] py-[15px] pl-[20px] pr-[20px] rounded-[8px] bg-white">
            <div className="absolute bg-[#25D654] w-[10px] h-full left-0 rounded-l-[8px]" />
            <span className="text-[#313131D6] text-[16px] max-w-[228px] leading-3">Створити основний прототип сторінки</span>
            <span className="pl-[7px] py-[5px] pr-[2px] border-[#31313124] border-solid border-[1px] rounded-[8px]">до 01.04</span>
          </div>
        </div>
      </DashboardItem>
      <DashboardItem heading={"Прогрес та успішність"} isButtonShown={false}>
        <p className="text-[#31313169] text-[10px] font-medium">Останнє оновлення: 30 квітня</p>
        <div className="w-fit mx-auto"><GradeCircular /></div>
        <div className="w-[462px] h-[1px] bg-[#31313121] mt-5 mb-5" />
        <p className="text-center text-[20px] font-medium">Залишилося 14 модулів</p>
        <p className="text-center text-[20px] mb-[58px] font-medium">Активні дисципліни: 3</p>
      </DashboardItem>
      <DashboardItem heading={"Бейджі"} isButtonShown={true}>
        <div className="flex gap-[10px] mb-5">
          <div>
            <div className="bg-white rounded-t-[8px] pt-[23px] px-[31px] pb-[9px]">
              <img className="w-[88px] h-[89px]" src={ScheduleOwl} alt="schedule"/>
            </div>
            <div className="bg-[#B7C9E6] text-center pt-[10px] pb-[9px] rounded-b-[8px]">
              <span className="text-[17px] text-center">Storyboard Pro</span>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-t-[8px] pt-[23px] px-[31px] pb-[9px]">
              <img className="w-[88px] h-[89px]" src={InteractivityOwl} alt="schedule"/>
            </div>
            <div className="bg-[#B7C9E6] text-center pt-[10px] pb-[9px] rounded-b-[8px]">
              <span className="text-[17px] text-center">Interactivity Ready</span>
            </div>
          </div>
        </div>
      </DashboardItem>
    </section>
  )
}