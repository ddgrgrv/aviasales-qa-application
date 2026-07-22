import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, staggerItem } from './AnimatedSection'

const userScenarios = [
  'понятно ли пользователю, что произошло',
  'видит ли он варианты действий',
  'может ли самостоятельно оформить возврат',
  'получает ли подтверждение',
  'понимает ли сроки возврата денег',
]

const testAreas = [
  {
    title: 'Happy path',
    icon: '✅',
    color: 'border-emerald-200 bg-emerald-50',
    dotColor: 'bg-emerald-500',
    items: ['успешный возврат', 'корректный расчёт суммы'],
  },
  {
    title: 'Ошибки',
    icon: '⚠️',
    color: 'border-red-200 bg-red-50',
    dotColor: 'bg-red-500',
    items: [
      'отказ платёжного шлюза',
      'проблемы авиакомпании',
      'таймауты API',
    ],
  },
  {
    title: 'Граничные сценарии',
    icon: '🔀',
    color: 'border-amber-200 bg-amber-50',
    dotColor: 'bg-amber-500',
    items: [
      'частичный возврат',
      'несколько пассажиров',
      'разные валюты',
      'международные рейсы',
    ],
  },
  {
    title: 'Платформы',
    icon: '📱',
    color: 'border-blue-200 bg-blue-50',
    dotColor: 'bg-avia-blue',
    items: ['Web', 'iOS', 'Android'],
  },
]

function AreaCard({
  area,
}: {
  area: (typeof testAreas)[number]
}) {
  return (
    <div className={`flex h-full flex-col rounded-2xl border-2 p-6 ${area.color}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{area.icon}</span>
        <h3 className="text-lg font-semibold text-avia-text">{area.title}</h3>
      </div>
      <ul className="space-y-2.5">
        {area.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className={`h-2 w-2 shrink-0 rounded-full ${area.dotColor}`} />
            <span className="text-sm text-avia-text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SelfServiceHub() {
  return (
    <div className="relative mx-auto max-w-3xl rounded-3xl border-2 border-avia-blue/20 bg-white p-8 shadow-xl shadow-avia-blue/10">
      <div className="absolute -inset-3 rounded-[1.75rem] border-2 border-dashed border-avia-blue/15" />

      <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 border-avia-blue bg-white shadow-lg shadow-avia-blue/20">
          <span className="text-2xl">🎫</span>
          <span className="mt-1 px-2 text-center text-[10px] font-semibold leading-tight text-avia-blue">
            Self-service возврат
          </span>
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h3 className="text-lg font-semibold text-avia-text">
            Пользовательские сценарии
          </h3>
          <p className="mt-1 text-sm text-avia-text-muted">
            Пользователь получил уведомление о переносе рейса. Что я проверю:
          </p>
          <ul className="mt-4 space-y-2.5">
            {userScenarios.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-avia-blue" />
                <span className="text-sm text-avia-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function TestingScheme() {
  return (
    <AnimatedSection className="bg-avia-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-avia-blue">
            Продуктовое мышление
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-avia-text md:text-4xl">
            Как бы я тестировала self-service возврат билета
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-avia-text-muted">
            Пример продуктового мышления QA — структурированный подход к тестированию
            критического пользовательского сценария
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <SelfServiceHub />
        </motion.div>

        <StaggerContainer className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2">
          {testAreas.map((area) => (
            <motion.div key={area.title} variants={staggerItem} className="h-full">
              <AreaCard area={area} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
