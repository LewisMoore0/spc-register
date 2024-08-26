import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import RegisterRoute from './routes/register';
import { GetAllDogs } from './routes/dogs';
import TopAppBar from './Components/TopAppBar';
import { CreateDog } from './Dogs/CreateDog';
import { CreateOwner } from './Owners/CreateOwner';
import { GetAllOwners } from './routes/owners';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/register",
    element: <RegisterRoute />,
  },

  {
    path: "/dogs",
    element: <GetAllDogs />
  },

  {
    path: "/dog/create",
    element: <CreateDog />
  },
  {
    path: "/owners",
    element: <GetAllOwners />
  },

  {
    path: "/owner/create",
    element: <CreateOwner />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopAppBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);