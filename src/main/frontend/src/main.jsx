import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './components/Button.jsx'
import LinkButton from './components/LinkButton.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button text={"로그아웃"}/>
    <LinkButton text={"스크랩"}/>
  </StrictMode>,
)
