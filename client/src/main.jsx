import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home} from "./pages/Home.jsx";
import { Provider } from './Provider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Home />
    </StrictMode>,
)
