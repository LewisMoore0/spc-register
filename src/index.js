import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Register } from './Components/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import RegisterRoute from './routes/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/register",
    element: <RegisterRoute />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);