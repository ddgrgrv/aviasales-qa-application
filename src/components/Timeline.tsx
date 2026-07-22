import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedSection, StaggerContainer, staggerItem } from './AnimatedSection'
import { Button } from './Button'

const timelineEvents = [
  {
    title: 'Простой маршрут',
    text: 'Зимой я летела из Екатеринбурга в Батуми с пересадкой в Сочи. Маршрут казался простым: утром вылететь из Екатеринбурга, пересесть в Сочи и уже вечером быть дома.',
    icon: '✈️',
  },
  {
    title: 'Всё пошло не по плану',
    text: 'В день вылета самолёт должен был отправиться в 8 утра, а около 5 утра пришло уведомление о переносе рейса. За несколько часов до поездки стало понятно, что я больше не успеваю на следующий рейс до Батуми.',
    icon: '⏰',
  },
  {
    title: 'Чувство неопределённости',
    text: 'Раннее утро, чемодан уже собран, а ты пытаешься понять, что делать дальше. Отдельные билеты, сорванная пересадка, риск потерять деньги и остаться без понятного плана действий.',
    icon: '😰',
  },
  {
    title: 'Ценность продукта',
    text: 'В такой ситуации особенно быстро понимаешь настоящую ценность продукта. Не когда всё работает идеально, а когда что-то идёт не так.',
    icon: '💡',
  },
  {
    title: 'Поддержка Aviasales',
    text: 'Я обратилась в поддержку Aviasales. Команда помогла разобраться с ситуацией и оформить возврат средств за билеты.',
    icon: '💬',
  },
  {
    title: 'Забота после ответа',
    text: 'После первого обращения общение не закончилось. Пока шёл процесс возврата, сотрудники сами связывались со мной и уточняли, всё ли получилось, пришли ли деньги и решился ли вопрос.',
    icon: '🤝',
  },
]

export function Timeline() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimatedSection
      id="why-aviasales"
      className="bg-avia-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-avia-blue">
            Моя история с Aviasales
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-avia-text md:text-4xl">
            Почему мне важен качественный self-service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-avia-text-muted">
            Пользовательский опыт, который запомнился мне и изменил взгляд на продукт
          </p>

          <div className="mt-8">
            <Button
              variant={isOpen ? 'secondary' : 'primary'}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? 'Свернуть историю' : 'Читать историю'}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </Button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="story-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="relative mt-16">
                <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-avia-blue via-avia-blue-muted to-avia-blue/20 md:left-1/2 md:-translate-x-px" />

                <StaggerContainer className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.title}
                      variants={staggerItem}
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div
                        className={`hidden md:block md:w-1/2 ${
                          index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                        }`}
                      >
                        <div
                          className={`rounded-2xl border border-avia-blue/10 bg-white p-6 text-left shadow-sm ${
                            index % 2 === 0 ? 'md:ml-auto' : ''
                          }`}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-xl">{event.icon}</span>
                            <h3 className="font-semibold text-avia-text">{event.title}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-avia-text-muted">
                            {event.text}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-avia-surface bg-avia-blue text-sm font-bold text-white shadow-lg shadow-avia-blue/30 md:left-1/2">
                        {index + 1}
                      </div>

                      <div className="ml-16 md:hidden">
                        <div className="rounded-2xl border border-avia-blue/10 bg-white p-5 shadow-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-xl">{event.icon}</span>
                            <h3 className="font-semibold text-avia-text">{event.title}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-avia-text-muted">
                            {event.text}
                          </p>
                        </div>
                      </div>

                      <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>

              <div className="mt-16 rounded-2xl border border-avia-blue/15 bg-gradient-to-r from-avia-blue-light to-white p-8 text-center">
                <p className="text-lg font-medium leading-relaxed text-avia-text">
                  Когда ты стоишь с сорванной пересадкой и не понимаешь, что делать дальше,
                  такая поддержка ощущается совсем по-другому. Именно это и осталось у меня
                  в памяти после той поездки.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
