import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebApp from './zustand/nivel-1/WebApp.tsx'
import Task from './zustand/nivel-2/Task.tsx'
import Header from './components/Header.tsx'
import Store from './zustand/nivel-3/Store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Store  />
  </StrictMode>,
)
