import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Main from './components/Layout/Main';
import About from './components/About';
import Shop from './components/Shop/Shop';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : 'about',
            element : <About></About>
        },
        {
            path : 'shop',
            element : <Shop></Shop>,
            loader : ()=>fetch('products.json')
        }
      ]
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
