import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Cart.css";

function Cart(prop) {
  const back = useNavigate();
  return (
    <div className="cart-main-div">
      <i style={{ height: "200px", width: "200px" }} onClick={() => back("/")}>
        <FaHome style={{ height: "100px", width: "100px" }} />
      </i>

      <div className="cart-main-div">
        {prop.cart.map((product) => {
          return (
            <div key={product.id} className="cart-item-div">
              <div className="cart-image-div">
                <img src={product.thumbnail} id="cart-img"></img>
              </div>
              <div className="cart-info-div">
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <h4>Price : {product.price} $</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
