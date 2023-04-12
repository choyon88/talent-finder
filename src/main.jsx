import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import ErrorPage from './error-page';
import Statistics from './Components/Statistics/Statistics';

import Blog from './Components/Blog/Blog';
import Header from './Components/Header.jsx/Header';
import SingleJobDetails from './Components/SingleJobDetails/SingleJobDetails';
import AppliedJob from './Components/AppliedJob/AppliedJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
     loader:()=> fetch(`/data.json`),
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog> ,
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>
      },
     
      {
        path: "/data/:_id",
        element: <SingleJobDetails></SingleJobDetails>,
      
        loader: ({ params }) =>
        fetch(`/data.json`)
          .then((res) => res.json())
            .then((data) => data.find((item) => item._id === params._id)),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
