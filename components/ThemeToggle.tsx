'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle () {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'light'|'dark') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-xl border px-3 py-2 text-xs hover:bg-white/10" style={{ borderColor: 'var(--border)' }}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}