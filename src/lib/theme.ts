export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'nodora-theme'

export function readTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // 隐私模式可能禁止读取本地存储，退回系统外观。
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function writeTheme(theme: ThemeMode) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // 写不进去时仍切换当前页面外观。
  }
  applyTheme(theme)
}
