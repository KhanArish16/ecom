import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(data);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((value) => value.json())
      .then((json) => setData(json.products));
  }, []);

  const gettingCartData = (data) => {
    // console.log(data);
    setCart((prev) => [...prev, data]);
  };
  console.log("cart", cart);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Product data={data} gettingCartData={gettingCartData} />}
          />
          <Route path="cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
