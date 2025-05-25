import Schedule from "../../assets/images/schedule.png"
import SleepyOwl from "../../assets/images/sleepy-owl.png"
import HappyOwl from "../../assets/images/happy-owl.png"
import SmartOwl from "../../assets/images/smart-owl.png"

const cards = [
  {
    image: Schedule,
    heading: 'Відстеження успішності по дисциплінах',
  },
  {
    image: SleepyOwl,
    heading: 'Розклад занять та дедлайни',
  },
  {
    image: HappyOwl,
    heading: 'Мотивація через бейджі та досягнення',
  },
  {
    image: SmartOwl,
    heading: 'Доступ з будь-якого пристрою',
  },
]

export default function WhyEduTrack () {
  return (
    <span className="px-20">
      <h2 className="mt-[105px] uppercase text-[#313131D6] text-center text-[50px] font-bold">Чому EduTrack?</h2>
      <div className="flex items-stretch justify-between max-w-[1278px] mx-auto mt-[50px] mb-[95px]">
        {cards.map((card) => (
          <div className="flex flex-col items-center gap-6 px-[31px] py-[56px] rounded-[24px] bg-[#96B1DD]" key={card.heading}>
            <img className="w-[140px]" src={card.image} alt={card.heading}/>
            <h3 className="text-[#F9FAFB] text-center text-[20px] font-medium max-w-[220px]">{card.heading}</h3>
          </div>
        ))}
      </div>
    </span>
  )
}