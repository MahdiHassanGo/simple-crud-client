import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
