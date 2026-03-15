import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set initial theme ASAP to avoid a flash on first paint.
try {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  const initial = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light'
  const isDark = initial === 'dark'
  document.documentElement.classList.toggle('dark', isDark)
  document.body.classList.toggle('dark', isDark)
} catch {
  // ignore
}

createRoot(document.getElementById('root')).render(
  <App />,
)
