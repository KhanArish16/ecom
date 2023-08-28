import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFilteredItem] = useState([]);
  // console.log(searchItem);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((value) => value.json())
      .then((json) => setData(json.products));
  }, []);

  useEffect(() => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(searchItem)
    );
    setFilteredItem(filtered);
  }, [searchItem, data]);

  const gettingCartData = (data) => {
    // console.log(data);
    setCart((prev) => [...prev, data]);
  };
  const removeCartItem = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    console.log("workin ");
  };

  // console.log("cart", cart);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Product
                data={searchItem.length > 0 ? filterItem : data}
                gettingCartData={gettingCartData}
                setSearchItem={setSearchItem}
              />
            }
          />
          <Route
            path="cart"
            element={<Cart cart={cart} removeCartItem={removeCartItem} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
