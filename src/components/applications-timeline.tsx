import { Timeline } from "@/components/ui/timeline"
import Icon from "@/components/ui/icon"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Утро — заряди день",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Открывай DayTrack с утра и ставь цели на день. Запишите планы, намерения и то, что хочешь отследить.
            Уже через неделю ты увидишь, как утренний ритуал меняет продуктивность.
          </p>
          <div className="space-y-3">
            {["Постановка целей на день", "Трекер настроения и энергии", "Утренняя страница намерений"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-blue-400 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "День — фиксируй прогресс",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В течение дня отмечай выполненные задачи, записывай мысли и заносишь метрики. 
            Быстрые заметки и счётчики помогут не упустить ни одного важного момента.
          </p>
          <div className="space-y-3">
            {["Быстрые отметки одним касанием", "Таймер фокуса и активности", "Счётчики любых показателей"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-blue-400 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Вечер — анализируй и расти",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Вечерняя рефлексия — сильнейший инструмент роста. Смотри графики дня, сравнивай с прошлой неделей 
            и замечай, что работает именно для тебя.
          </p>
          <div className="space-y-3">
            {["Итоги дня с графиками", "Сравнение с прошлыми периодами", "Инсайты и личные выводы"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-blue-400 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">Как работает DayTrack</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага превращают каждый день в источник роста и осознанности.
            Начни сегодня — результат увидишь уже через неделю.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
