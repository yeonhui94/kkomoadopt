import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './components/Button.jsx'
import LinkButton from './components/LinkButton.jsx'
import Card2 from './components/Card2/Card2.jsx'
import AdoptionDropdown from './components/test.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)