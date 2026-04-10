import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "DayTrack бесплатный?",
      answer:
        "Да! Базовый функционал полностью бесплатен и навсегда. Вы можете отслеживать неограниченное количество показателей, строить графики и ставить цели без какой-либо оплаты.",
    },
    {
      question: "Какие показатели можно отслеживать?",
      answer:
        "Абсолютно любые: шаги, вода, сон, настроение, вес, калории, время за экраном, медитации, чтение и многое другое. Также можно добавлять свои уникальные метрики.",
    },
    {
      question: "Мои данные в безопасности?",
      answer:
        "Полностью. Все данные хранятся в зашифрованном виде. Мы никогда не передаём и не продаём личную информацию третьим лицам.",
    },
    {
      question: "Есть ли мобильное приложение?",
      answer:
        "Веб-версия отлично работает на смартфонах — просто откройте в браузере. Нативные приложения для iOS и Android в разработке.",
    },
    {
      question: "Можно ли экспортировать данные?",
      answer:
        "Да, все ваши данные доступны для экспорта в удобных форматах. Ваша статистика всегда принадлежит только вам.",
    },
    {
      question: "Как не терять стрик и мотивацию?",
      answer:
        "DayTrack отправляет умные напоминания в удобное вам время. Также есть система достижений и наград — она реально помогает не бросать начатое.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о DayTrack — как это работает и чего ожидать.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
