import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Questionnaire from './Pages/Questionnaire/questionnaire.jsx'
import Journal from './Pages/Journal/journal.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "questionnaire",
    element: <Questionnaire />,
  },
  {
    path: "journal",
    element: <Journal />,
  },
  {
    path: "progress",
    element: <Journal />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
