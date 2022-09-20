import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayNavbar from "./components/Outlet/DisplayNavbar";
import WithoutNavbar from "./components/Outlet/WithoutNavbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import DetailProduct from "./pages/DetailProduct/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNavbar />}>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Route>
        <Route element={<DisplayNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail-product" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
