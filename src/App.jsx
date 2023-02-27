import "./App.css";
import Home from "./Pages/Home.jsx";
import ProductList from "./Pages/ProductList.jsx";
import Product from "./Pages/Product.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Cart from "./Pages/Cart.jsx";
import { Routes, Route, Link, Navigate  } from "react-router-dom";

function App() {
  //dummy condition for login
  const user = true;

 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
