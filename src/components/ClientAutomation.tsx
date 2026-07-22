import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'

const highlights = [
  {
    icon: '🔄',
    title: 'Self-service вместо шаблонов',
    text: 'Снижать нагрузку на поддержку не за счёт шаблонных ответов, а за счёт качественных пользовательских сценариев.',
  },
  {
    icon: '🎫',
    title: 'Прямое влияние на UX',
    text: 'Возможность самостоятельно вернуть билет, изменить бронирование или решить проблему без ожидания ответа поддержки.',
  },
  {
    icon: '🧪',
    title: 'Тестировать и улучшать',
    text: 'Именно такие продукты мне интересно тестировать и помогать улучшать — с фокусом на реальный пользовательский опыт.',
  },
]

export function ClientAutomation() {
  return (
    <AnimatedSection className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <a
              href="https://www.aviasales.ru/about/vacancies/4111104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-avia-blue transition-colors hover:text-avia-blue-dark"
            >
              Client Automation Team
              <span aria-hidden="true">↗</span>
            </a>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-avia-text md:text-4xl">
              Мне близка идея self-service продуктов
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-avia-text-muted">
              Меня вдохновляет задача снижать нагрузку на поддержку не за счёт
              шаблонных ответов, а за счёт создания качественных пользовательских
              сценариев.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-avia-text-muted">
              Возможность самостоятельно вернуть билет, изменить бронирование или
              решить проблему без ожидания ответа поддержки — это прямое влияние на
              пользовательский опыт.
            </p>
            <p className="mt-4 text-lg font-medium text-avia-text">
              Я вижу QA не только как поиск дефектов, а как помощь команде создавать
              понятные и надёжные пользовательские сценарии.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-avia-text-muted">
              Именно такие продукты мне интересно тестировать и помогать улучшать.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-4 rounded-2xl border border-avia-blue/10 bg-avia-surface p-6 transition-colors hover:border-avia-blue/25 hover:bg-avia-blue-light/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-avia-text">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-avia-text-muted">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
