import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Priyanka from './router/Priyanmka';
import Royal from './router/Royal';
import Countries from './router/Countries';
import Country from './router/country';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/mohan",
        element:<Priyanka></Priyanka>
      },
      {
        path:"/bike",
        element:<Royal></Royal>
      },
      {
        path:"/countries",
        element:<Countries></Countries>,
        children:[
          
            {
              path:"country/:cname",
              element:<Country></Country>
         }
        ]
      }
      
    ]
  } 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
    </RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
