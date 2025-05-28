import DashboardItem from "../../components/dashboard-item/DashboardItem.tsx";

export default function ProfileLeftContent() {
  return (
    <div>
      <h2 className="uppercase text-[50px] font-bold text-[#313131D6]">
        профіль студента
      </h2>
      <div className="flex flex-wrap gap-[10px] mt-10">
        <DashboardItem heading={'Компетенції /навички'} isButtonShown={false}>
          <div className="flex items-center gap-[10px]">
            <p className="py-[6px] px-4 text-[#313131D6] text-[12px] border border-solid border-[#B5C7E5] rounded-[29px]">
              Прототипування в Figma
            </p>
            <p className="py-[6px] px-4 text-[#313131D6] text-[12px] border border-solid border-[#B5C7E5] rounded-[29px]">
              Motion-дизайн (After Effects)
            </p>
            <p className="py-[6px] px-4 text-[#313131D6] text-[12px] border border-solid border-[#B5C7E5] rounded-[29px]">
              Командна робота
            </p>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px] mb-[20px]">
            <p className="py-[6px] px-4 text-[#313131D6] text-[12px] border border-solid border-[#B5C7E5] rounded-[29px]">
              Мультимедійне мислення
            </p>
            <p className="py-[6px] px-4 text-[#313131D6] text-[12px] border border-solid border-[#B5C7E5] rounded-[29px]">
              UX-дослідження
            </p>
            <p className="py-[6px] px-4 text-[#313131D6] text-[12px] border border-solid border-[#B5C7E5] rounded-[29px]">
              Програмування (p5.js)
            </p>
          </div>
        </DashboardItem>
        <DashboardItem heading={"Цілі"} isButtonShown={false}>
          <div className="flex">
            <p>🎯</p>
            <div>
              <p className="text-[14px] text-[#313131D6]">“Хочу створювати інтерфейси, що розповідають історії”</p>
              <p className="text-[12px] text-[#3131316B]">(Натхненням стала Motion Gallery!)</p>
            </div>
          </div>
          <div className="flex gap-5 w-fit px-[11px] py-[6px] rounded-[8px] bg-[#B5C7E5] mx-auto mt-[18px] mb-[10px]">
            <button className="text-[#3131316B]">{'<'}</button>
            <button className="text-[#3131316B]">{'>'}</button>
          </div>
        </DashboardItem>
        <DashboardItem heading={"Моя навчальна траєкторія"} isButtonShown={false}>
          <div className="flex items-center gap-[10px]">
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-100 px-4 py-2 text-center text-gray-800 font-medium">
                [ Базові дисципліни ]
              </div>
              <div className="divide-y divide-gray-200 text-gray-800 px-4">
                <div className="py-3">Основи UX/UI</div>
                <div className="py-3">Креативне програмування</div>
                <div className="py-3">Теорія дизайну</div>
              </div>
              <div className="px-4 py-3">
                <button className="w-full bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold py-2 rounded-lg transition">
                  Переглянути все за 1 курс
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-100 px-4 py-2 text-center text-gray-800 font-medium">
                [ Прикладні дисципліни ]
              </div>
              <div className="divide-y divide-gray-200 text-gray-800 px-4">
                <div className="py-3">Інформаційна архітектура</div>
                <div className="py-3">Проєктна студія</div>
                <div className="py-3">Прототипування інтерфейсів</div>
              </div>
              <div className="px-4 py-3">
                <button className="w-full bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold py-2 rounded-lg transition">
                  Переглянути все за 2 курс
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-100 px-4 py-2 text-center text-gray-800 font-medium">
                [ Поглиблене вивчення ]
              </div>
              <div className="divide-y divide-gray-200 text-gray-800 px-4">
                <div className="py-3">Motion-дизайн</div>
                <div className="py-3">Основи анімації</div>
                <div className="py-3">Візуалізація інтерфейсів</div>
              </div>
              <div className="px-4 py-3">
                <button className="w-full bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold py-2 rounded-lg transition">
                  Переглянути все за 3 курс
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-100 px-4 py-2 text-center text-gray-800 font-medium">
                [ Фінальні проєкти ]
              </div>
              <div className="divide-y divide-gray-200 text-gray-800 px-4">
                <div className="py-3">AR-технології в дизайні</div>
                <div className="py-3">Фінальний проєкт</div>
                <div className="py-3">Публічна презентація</div>
              </div>
              <div className="px-4 py-3">
                <button className="w-full bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold py-2 rounded-lg transition">
                  Переглянути все за 4 курс
                </button>
              </div>
            </div>
          </div>
        </DashboardItem>
        <DashboardItem heading={"Активність і прогрес"} isButtonShown={false}>
          <div className="flex gap-[100px] items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl">
            {/* Left side text */}
            <div className="w-[350px] space-y-4 text-gray-800 text-sm sm:text-base">
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span>Поточні дисципліни:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="border-b border-gray-300 pb-1">
                <div className="flex justify-between">
                  <span>Прогрес:</span>
                  <span className="font-medium">70%</span>
                </div>
                <div className="text-xs text-gray-500 text-right">
                  (12 з 13 дисциплін)
                </div>
              </div>
              <div className="flex justify-between">
                <span>Середній бал за семестр:</span>
                <span className="font-medium">92</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-end text-xs text-gray-500">
              <div className="relative w-12 h-24 bg-gray-300 rounded-full overflow-hidden shadow-inner">
                <div
                  className="absolute bottom-0 left-0 w-full bg-gray-700 text-white text-sm flex items-center justify-center"
                  style={{ height: `70%` }}
                >
                  70%
                </div>
              </div>
              <div className="mt-2">Оновлено: 01.05.2025</div>
            </div>
          </div>
        </DashboardItem>
      </div>
    </div>
  )
}