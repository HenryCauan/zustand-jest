import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Store from './zustand/nivel-1/Store.tsx'
import WebApp from './zustand/nivel-1/WebApp.tsx'
import Task from './zustand/nivel-2/Task.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Task  />
  </StrictMode>,
)
