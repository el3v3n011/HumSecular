import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Main from './components/layout/Main';
import Gallery from './pages/Gallery';
import Events from './pages/events'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Main><Home /></Main>),
  },
  {
    path: "/gallery",
    element: (<Main><Gallery /></Main>)
  },{
    path:"/pages/events.jsx",
    element: (<Main><Events /></Main>)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
