import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TyrePage from './pages/TyrePage';
import WheelsPage from './pages/WheelsPage';
import CustomersPage from './pages/CustomersPage';
import SalesPage from './pages/SalesPage';
import NewsPage from './pages/NewsPage';
import PartnersPage from './pages/PartnersPage';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import BasketPage from './pages/BusketPage';
import BalancePage from './pages/BalancePage';
import TruckTyresPage from './pages/TruckTyresPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/:truck-tyres',
            element: <div>Abraham</div>,
          },
        ],
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/tyres',
        element: <TyrePage />,
        children: [
          {
            path: '/tyres/:item',
            element: <div>Abraham</div>,
          },
        ],
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
      {
        path: '/balance',
        element: <BalancePage />,
      },
      {
        path: '/truck-tyres',
        element: <TruckTyresPage />,
      },
      {
        path: '/signin',
        element: <SignIn />,
        children: [
          {
            path: '/signin/:location',
            element: <div>Abraham</div>,
          },
        ],
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/basket',
        element: <BasketPage />,
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
