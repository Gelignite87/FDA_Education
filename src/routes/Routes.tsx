import { NotFound } from '../components/not-found/NotFound.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes.data.ts'

export const MyRoutes = () => {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        {routes.map(item => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<item.component />}
            />
          )
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
