import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Алина Соколова",
    role: "Фитнес-тренер, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "DayTrack изменил мой подход к саморазвитию. Вижу прогресс каждый день — это безумно мотивирует не останавливаться!",
    stars: 5,
  },
  {
    name: "Дмитрий Козлов",
    role: "Предприниматель, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец-то приложение, которое не надоедает. Простое, красивое и реально полезное. Стрик уже 47 дней!",
    stars: 5,
  },
  {
    name: "Мария Ли",
    role: "Студентка, Новосибирск",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Слежу за водой, сном и учёбой — всё в одном месте. Графики реально помогают понять, где я теряю продуктивность.",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            12 000+ человек уже улучшают свою жизнь с DayTrack каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
