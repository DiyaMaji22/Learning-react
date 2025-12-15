import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterA from './assets/Counter/CounterA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterA/>
  </StrictMode>,
)
