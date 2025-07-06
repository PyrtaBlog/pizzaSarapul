import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { MenuLayout } from "./Layout/Menu/MenuLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
