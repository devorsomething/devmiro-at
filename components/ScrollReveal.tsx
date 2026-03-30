'use client'
import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
  distance?: number
  threshold?: number
  style?: React.CSSProperties
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  distance = 40,
  threshold = 0.15,
  style,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`
      case 'left': return `translateX(-${distance}px)`
      case 'right': return `translateX(${distance}px)`
      default: return 'none'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ── Counter Animation Hook ── */
export function useCounter(target: number, duration = 2000, suffix = '') {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setStarted(true)
      let start = 0
      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        el.textContent = Math.floor(eased * target).toLocaleString('de-AT') + suffix
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = target.toLocaleString('de-AT') + suffix
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, suffix, started])

  return ref
}

/* ── Animated Number ── */
export function AnimatedNumber({ value, suffix = '', duration = 2000, style }: {
  value: number
  suffix?: string
  duration?: number
  style?: React.CSSProperties
}) {
  const ref = useCounter(value, duration, suffix)
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} style={style}>
      0{suffix}
    </span>
  )
}

/* ── Loading Spinner ── */
export function PageLoader() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: 'var(--bg-void)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1.5rem',
    }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: 'linear-gradient(135deg, #00e5ff 0%, #4d7cff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '1.25rem',
        color: '#030308',
        animation: 'pulse-glow 1.5s ease-in-out infinite',
        boxShadow: '0 0 40px rgba(0, 229, 255, 0.4)',
      }}>
        D
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
      }}>
        Loading
      </div>
    </div>
  )
}
