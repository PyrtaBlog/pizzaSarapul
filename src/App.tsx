import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { MainPage } from "./Layout/MainPage";
import { LoginPage } from "./Layout/LoginPage";
import { NotFound } from "./Layout/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <Button typeButton="primary" caps={true}>
          Вход
        </Button>
        <Input placeholder="Email" />
      </div>
      <nav className="menu">
        <a href="/">Home</a>
        <a href="/login">Login</a>
      </nav>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
