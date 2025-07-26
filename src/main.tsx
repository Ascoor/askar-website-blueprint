import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { structuredData } from './structuredData'

const rootEl = document.getElementById('root')!
createRoot(rootEl).render(<App />)

window.addEventListener('load', () => {
  const loader = document.getElementById('initial-loader')
  if (loader) {
    loader.style.opacity = '0'
    setTimeout(() => loader.remove(), 500)
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
})
