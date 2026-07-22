import { motion } from 'framer-motion'
import { AnimatedSection, StaggerContainer, staggerItem } from './AnimatedSection'

const principles = [
  {
    icon: '📋',
    title: 'Качество начинается до разработки',
    text: 'Участвую в обсуждении требований, нахожу риски на этапе груминга и помогаю команде заранее учитывать сложные сценарии.',
    color: 'from-blue-500/10 to-blue-500/5',
  },
  {
    icon: '👤',
    title: 'Думаю как пользователь',
    text: 'Стараюсь находить реальные пользовательские сценарии, а не только технические ошибки.',
    color: 'from-indigo-500/10 to-indigo-500/5',
  },
  {
    icon: '🤖',
    title: 'Автоматизация как инструмент',
    text: 'Использую Playwright и TypeScript для построения стабильного регресса — как один из инструментов качества, а не как самоцель.',
    color: 'from-cyan-500/10 to-cyan-500/5',
  },
  {
    icon: '⚙️',
    title: 'Процессы важны',
    text: 'Люблю выстраивать прозрачные процессы качества внутри команды.',
    color: 'from-sky-500/10 to-sky-500/5',
  },
]

export function Quality() {
  return (
    <AnimatedSection className="bg-avia-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-avia-blue">
            Подход к качеству
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-avia-text md:text-4xl">
            Как я подхожу к качеству
          </h2>
        </div>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-2xl border border-avia-blue/8 bg-gradient-to-br ${item.color} bg-white p-8 transition-all hover:border-avia-blue/20 hover:shadow-lg hover:shadow-avia-blue/5`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-avia-blue-light text-2xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-avia-text">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-avia-text-muted">{item.text}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
