import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>//remember to delete if it causes any issues related to Double rendering
    <App />
  </StrictMode>,
)
