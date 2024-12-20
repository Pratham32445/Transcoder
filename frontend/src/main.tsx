import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.js";
import { MainContextProvider } from "./context/State.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardDemo as Card } from "./components/Card";
import Register from "./components/Register.js";
import Layout from "./components/Layout";
import Process from "./components/Process";
import Allvideos from "./components/Allvideos";
import SingleVideo from "./utils/SingleVideo";
import Home from "./components/Home.js";
import Admin from "./components/Admin.js";
import Login from "./components/Login.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upload",
        element: <Card />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/AllVideos",
        element: <Allvideos />,
      },
      {
        path: "/video/:VideoId",
        element: <SingleVideo />,
      },
      {
        path : "/Admin/Queries",
        element : <Admin/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainContextProvider>
        <RouterProvider router={router} />
      </MainContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
