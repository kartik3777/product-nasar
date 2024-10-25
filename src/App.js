import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail'
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
           <Route path="product/:name" element={<ProductDetail />} />
          <Route path="Login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
