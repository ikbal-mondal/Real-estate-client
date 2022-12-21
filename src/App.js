import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Components/Home/Home';

function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/Home',
          element:<Home></Home>
        }
      ]
    }
  ])

  return (
    <div className="">

    <RouterProvider router={router}></RouterProvider>    
    </div>
  );
}

export default App;
