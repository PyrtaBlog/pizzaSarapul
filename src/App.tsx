import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { MainPage } from "./Layout/MainPage";
import { LoginPage } from "./Layout/LoginPage";
import { NotFound } from "./Layout/NotFound";

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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
