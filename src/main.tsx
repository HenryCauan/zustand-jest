import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Store from './zustand/nivel-1/Store.tsx'
import WebApp from './zustand/nivel-1/WebApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebApp />
  </StrictMode>,
)
