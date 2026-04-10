import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Zap" size={14} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Бесплатно навсегда</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6 font-orbitron text-balance">
            Начни следить за собой уже сегодня
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйся к 12 000+ людей, которые уже превращают каждый день в осознанный прогресс.
            Регистрация занимает 30 секунд — никаких карточек, никаких обязательств.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 pulse-button text-lg px-8 py-4 border-0"
            >
              <Icon name="Rocket" size={18} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Посмотреть демо
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
