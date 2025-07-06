import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

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
