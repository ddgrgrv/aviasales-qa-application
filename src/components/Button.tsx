import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  onClick?: () => void
  className?: string
}

const variants = {
  primary:
    'bg-avia-blue text-white hover:bg-avia-blue-dark shadow-lg shadow-avia-blue/25',
  secondary:
    'bg-white text-avia-blue border border-avia-blue/20 hover:border-avia-blue/40 hover:bg-avia-blue-light/50',
  ghost: 'bg-transparent text-avia-text-muted hover:text-avia-blue hover:bg-avia-blue-light/30',
}

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
