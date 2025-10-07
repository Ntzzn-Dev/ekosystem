import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextCustom from './text.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextCustom>Ekosystem</TextCustom>
    <App />
  </StrictMode>,
)
