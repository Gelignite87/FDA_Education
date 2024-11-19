import { MyRoutes } from './routes/Routes.js'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.sass'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyRoutes />
  </StrictMode>,
)
