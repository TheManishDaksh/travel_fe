import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider } from './context/categoryContext.jsx'
import { DateProvider } from './context/DateContext.jsx'

createRoot(document.getElementById('root')).render(
  <CategoryProvider >
    <BrowserRouter>
      <DateProvider>
        <App />
      </DateProvider>
     </BrowserRouter>
  </CategoryProvider>
)
