import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
