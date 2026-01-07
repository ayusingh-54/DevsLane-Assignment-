import "./App.css";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Products from "./components/Products";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app">{isAuthenticated ? <Products /> : <Login />}</div>
  );
}

export default App;
