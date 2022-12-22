import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Components/Home/Home';
import DetailsShow from './Components/Home/category/DetailsShow';
import Login from './Components/UserAuth/Login/Login';
import Signup from './Components/UserAuth/Signup/Signup';

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
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/propertiesDetails/:id',
          element:<DetailsShow></DetailsShow>,
          loader:({params}) => fetch(`http://localhost:5000/propertiesDetails/${params.id}`)
        },
        
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
