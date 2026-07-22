import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'

const skills = [
  'Web testing',
  'API testing',
  'Mobile scenarios',
  'Cross-platform thinking',
  'Playwright',
  'TypeScript',
  'JavaScript',
  'REST API',
  'Postman',
  'GitLab CI/CD',
  'Allure TestOps',
  'Docker',
  'Test Design',
  'Agile',
]

export function Skills() {
  return (
    <AnimatedSection className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-avia-blue">
            Навыки
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-avia-text md:text-4xl">
            Технологии и инструменты
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-avia-text-muted">
            Тестирование веб-приложений и понимание mobile-specific сценариев —
            вместе с автоматизацией и процессами качества
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="cursor-default rounded-full border border-avia-blue/15 bg-avia-blue-light/40 px-5 py-2.5 text-sm font-medium text-avia-blue-dark transition-colors hover:border-avia-blue/30 hover:bg-avia-blue-light"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
