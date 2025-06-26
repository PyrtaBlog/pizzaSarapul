import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Button typeButton="primary" caps={true}>
          Вход
        </Button>
        <Input placeholder="Email" />
      </div>
    </>
  );
}

export default App;
