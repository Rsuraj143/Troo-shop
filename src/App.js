import "./App.css";

import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
