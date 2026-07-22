import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'История', href: '#why-aviasales' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Контакты', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      style={{ borderBottomColor: `rgba(12, 115, 254, ${scrolled ? 0.1 : 0})` }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold text-avia-text">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-avia-blue text-sm text-white">
            ✈
          </span>
          <span className="hidden sm:inline">Daria Grigoreva</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-avia-text-muted transition-colors hover:text-avia-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.a
          href="#contact"
          style={{ opacity: scrolled ? 1 : opacity }}
          className="rounded-lg bg-avia-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-avia-blue-dark"
        >
          Связаться
        </motion.a>
      </nav>
    </motion.header>
  )
}
