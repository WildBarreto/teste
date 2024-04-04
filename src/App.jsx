import "./App.css";
import { Banner } from "./components/banner";
import { Login } from "./components/login.jsx/index.jsx";

function App() {
  return (
    <div className="login">
      <Banner />
      <Login />
    </div>
  );
}

export default App;
