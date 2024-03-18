import { lazy, Suspense } from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
const About = lazy(() => import('./pages/About/About.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Log = lazy(() => import('./pages/Log/Log.jsx'));
const Auth = lazy(() => import('./pages/Auth/Auth.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/home",
    element: <Auth />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/home/user/",
        element: <About />,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<p>LOADING...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
