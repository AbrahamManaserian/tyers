import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TyresPage from './pages/TyresPage';
import WheelsPage from './pages/WheelsPage';
import CustomersPage from './pages/CustomersPage';
import SalesPage from './pages/SalesPage';
import NewsPage from './pages/NewsPage';
import PartnersPage from './pages/PartnersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/tyres',
        element: <TyresPage />,
      },
      {
        path: '/wheels',
        element: <WheelsPage />,
      },
      {
        path: '/customers',
        element: <CustomersPage />,
      },
      {
        path: '/sales',
        element: <SalesPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/partners',
        element: <PartnersPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
