import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './components/Button.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button text={"ㅎㅇ"}/>
  </StrictMode>,
)
