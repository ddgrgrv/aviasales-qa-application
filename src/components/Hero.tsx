import { motion } from 'framer-motion'
import { Button } from './Button'
import { StaggerContainer, staggerItem } from './AnimatedSection'

const stats = [
  { value: '3+ года QA', label: 'Product teams' },
  { value: '350+ автотестов', label: 'E2E + API' },
  { value: 'Playwright + TS', label: 'Automation' },
  { value: 'Quality ownership', label: 'От требований до релиза' },
]

const heroCards = [
  { icon: '🎯', title: '3+ года QA', desc: 'Product teams' },
  { icon: '🧪', title: '350+ автотестов', desc: 'E2E + API' },
  { icon: '⚡', title: 'Playwright + TS', desc: 'Automation' },
  { icon: '💡', title: 'Quality ownership', desc: 'От требований до релиза' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-avia-blue-light/60 via-white to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-avia-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-64 w-64 rounded-full bg-avia-blue-muted/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.a
              href="https://www.aviasales.ru/about/vacancies/4111104"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-avia-blue/15 bg-white/80 px-4 py-1.5 text-sm text-avia-blue backdrop-blur-sm transition-colors hover:border-avia-blue/40 hover:bg-white"
            >
              <span className="h-2 w-2 rounded-full bg-avia-blue animate-pulse" />
              Отклик на вакансию QA Engineer · Client Automation
              <span aria-hidden="true" className="text-avia-blue/60">↗</span>
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-avia-text md:text-5xl lg:text-[3.25rem]"
            >
              Почему я хочу работать в{' '}
              <span className="text-avia-blue">Aviasales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-avia-text-muted"
            >
              QA Engineer с опытом обеспечения качества продуктовых решений,
              автоматизации тестирования и построения QA-процессов. Люблю работать
              на стыке пользовательского опыта, бизнеса и технологий.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="#experience">Смотреть мой опыт</Button>
              <Button href="#why-aviasales" variant="secondary">
                Почему именно Aviasales
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative rounded-3xl border border-avia-blue/10 bg-white p-8 shadow-xl shadow-avia-blue/10">
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-avia-blue to-avia-blue-dark text-4xl font-bold text-white shadow-lg shadow-avia-blue/30">
                    DG
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="text-sm">✈️</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-avia-text">Daria Grigoreva</h3>
                <p className="mt-1 text-sm text-avia-text-muted">QA Engineer</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl bg-avia-surface px-4 py-3 text-center"
                  >
                    <div className="text-sm font-bold leading-snug text-avia-blue">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-avia-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroCards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="group rounded-2xl border border-avia-blue/8 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:shadow-avia-blue/5"
            >
              <span className="text-2xl">{card.icon}</span>
              <h3 className="mt-3 font-semibold text-avia-text">{card.title}</h3>
              <p className="mt-1 text-sm text-avia-text-muted">{card.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
