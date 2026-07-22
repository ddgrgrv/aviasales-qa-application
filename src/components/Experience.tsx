import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, staggerItem } from './AnimatedSection'

const sections = [
  {
    icon: '🚀',
    title: 'Построила автоматизацию тестирования с нуля',
    items: [
      'разработала тестовый фреймворк на Playwright + TypeScript',
      'внедрила E2E и API автоматизацию для критических пользовательских сценариев',
      'создала более 350 автотестов',
      'достигла 100% покрытия регрессионных сценариев одного из продуктов',
    ],
  },
  {
    icon: '⚙️',
    title: 'Выстроила процесс качества и релизный цикл команды',
    items: [
      'внедрила прозрачный процесс прохождения изменений: от разработки и тестирования до релиза',
      'помогла команде структурировать этапы проверки качества перед выкладкой',
      'улучшила взаимодействие между разработчиками, QA и участниками релиза',
      'снизила риски выпуска изменений без достаточной проверки',
    ],
  },
  {
    icon: '🔍',
    title: 'Участвовала в полном цикле разработки продукта',
    items: [
      'участвовала в обсуждении требований и поиске рисков на этапе груминга',
      'анализировала пользовательские сценарии',
      'тестировала Web и API',
      'готовила тестовую документацию и контролировала качество изменений',
    ],
  },
]

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-avia-blue">
            Опыт
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-avia-text md:text-4xl">
            Что я делала на последнем месте работы
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-4xl rounded-3xl border border-avia-blue/10 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 text-xl font-bold text-white">
              WB
            </div>
            <div>
              <h3 className="text-xl font-bold text-avia-text">Wildberries</h3>
              <p className="text-sm text-avia-text-muted">
                QA Engineer · автоматизация, процессы и полный цикл качества
              </p>
            </div>
          </div>

          <StaggerContainer className="space-y-10">
            {sections.map((section) => (
              <motion.div key={section.title} variants={staggerItem}>
                <div className="mb-4 flex items-start gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h4 className="text-lg font-semibold text-avia-text">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3 pl-11">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-avia-blue" />
                      <span className="text-avia-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
