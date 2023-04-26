import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import CandidateApp from './pages/CandidateApp/CandidateApp'
import { ResearcherApp } from './pages/ResearchersApp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/setup',
    element: <ResearcherApp />
  },
  {
    path: '/redeem',
    element: <CandidateApp />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
