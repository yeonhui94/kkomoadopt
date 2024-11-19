import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LinkButton from './components/LinkButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LinkButton text="button"/>
    <LinkButton text="회원탈퇴" bg1color={"#000000"}/>
  </StrictMode>,
)
