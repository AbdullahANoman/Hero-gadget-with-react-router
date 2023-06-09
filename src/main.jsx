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
import Cart from './components/Cart/Cart';
import { productsAndCartData } from './loaders/cart&productdata';
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
        },
        {
          path:'cart',
          element:<Cart></Cart>,
          loader:productsAndCartData,
        }
      ]
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
