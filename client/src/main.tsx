import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import CandidateApp from './pages/CandidateApp/CandidateApp';
import Congratulations from './pages/CandidateApp/Congratulations.tsx';
import { CreateCoupon, ResearcherApp } from './pages/ResearchersApp';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'setup',
    element: <ResearcherApp />,
  },
  {
    path: 'setup/create',
    element: <CreateCoupon />,
  },
  {
    path: 'redeem',
    element: <CandidateApp />,
  },
  {
    path: '/congrats',
    element: <Congratulations />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
