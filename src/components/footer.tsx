import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Icon name="BarChart3" size={16} className="text-white" />
              </div>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Day<span className="text-blue-400">Track</span>
              </h2>
            </div>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Твой личный дневник прогресса. Следи за статистикой дня, строй графики и расти каждый день.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="font-space-mono text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 DayTrack. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Условия
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
