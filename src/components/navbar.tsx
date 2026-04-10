import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Icon name="BarChart3" size={16} className="text-white" />
            </div>
            <h1 className="font-orbitron text-xl font-bold text-white">
              Day<span className="text-blue-400">Track</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Возможности
              </a>
              <a href="#how-it-works" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Как работает
              </a>
              <a href="#faq" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-geist border-0">
              Начать бесплатно
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-blue-500/20">
              <a
                href="#features"
                className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Как работает
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-geist border-0">
                  Начать бесплатно
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
