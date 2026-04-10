import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Дневная статистика",
    description: "Записывай ключевые показатели каждого дня: продуктивность, настроение, активность и многое другое — всё в одном месте.",
    icon: "CalendarDays",
    badge: "Ежедневно",
  },
  {
    title: "Умные графики",
    description: "Интерактивные графики показывают твой прогресс во времени. Видишь тренды, замечаешь закономерности — растёшь осознанно.",
    icon: "TrendingUp",
    badge: "Аналитика",
  },
  {
    title: "Цели и привычки",
    description: "Ставь цели на день, неделю или месяц. Отслеживай привычки и получай мотивацию от собственного прогресса.",
    icon: "Target",
    badge: "Мотивация",
  },
  {
    title: "Персональный дашборд",
    description: "Настраивай под себя — выбирай, какие метрики важны именно тебе. Твоё приложение, твои правила.",
    icon: "LayoutDashboard",
    badge: "Кастом",
  },
  {
    title: "Напоминания",
    description: "Умные уведомления помогают не забыть заполнить дневник и держат тебя в курсе достижений.",
    icon: "Bell",
    badge: "Умный",
  },
  {
    title: "Экспорт данных",
    description: "Скачивай свою статистику в любой момент. Твои данные — только твои, без ограничений.",
    icon: "Download",
    badge: "Свобода",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Всё для твоего роста</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            DayTrack объединяет всё необходимое, чтобы каждый день становился лучше предыдущего
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                    <Icon name={feature.icon} size={20} className="text-blue-400" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}