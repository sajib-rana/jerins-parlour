import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from "./pages/providers/AuthProvider";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        {/* <div className="max-w-screen-xl mx-auto"> */}
          <RouterProvider router={router} />
        {/* </div> */}
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
