import { motion } from 'framer-motion'
import { Button } from './Button'
import { AnimatedSection } from './AnimatedSection'

const links = [
  {
    label: 'Скачать резюме',
    href: `${import.meta.env.BASE_URL}resume.pdf`,
    variant: 'primary' as const,
  },
  { label: 'Telegram', href: 'https://t.me/ddgrgrv', variant: 'secondary' as const },
  { label: 'Email', href: 'mailto:dashagrgrv121@gmail.com', variant: 'secondary' as const },
]

export function Footer() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-b from-white to-avia-blue-light/40 py-20 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-avia-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-avia-text md:text-4xl"
        >
          Буду рада познакомиться
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed text-avia-text-muted"
        >
          Мне нравится строить процессы качества и помогать командам выпускать
          продукты, которыми удобно пользоваться.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-lg font-medium text-avia-text"
        >
          Мне близка идея команды, которая помогает пользователям решать проблемы
          самостоятельно и одновременно делает продукт более удобным и человечным.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-avia-text-muted"
        >
          Поэтому вакансия{' '}
          <a
            href="https://www.aviasales.ru/about/vacancies/4111104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-avia-blue underline decoration-avia-blue/30 underline-offset-4 transition-colors hover:decoration-avia-blue"
          >
            Client Automation Team
          </a>{' '}
          показалась мне особенно близкой.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-6"
        >
          <a
            href="https://www.aviasales.ru/about/vacancies/4111104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-avia-text-muted transition-colors hover:text-avia-blue"
          >
            Вакансия на сайте Aviasales ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {links.map((link) => (
            <Button key={link.label} href={link.href} variant={link.variant}>
              {link.label}
            </Button>
          ))}
        </motion.div>

        <p className="mt-16 text-sm text-avia-text-muted">
          © {new Date().getFullYear()} Daria Grigoreva · QA Engineer Application
        </p>
      </div>
    </AnimatedSection>
  )
}
