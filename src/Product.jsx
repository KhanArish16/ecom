import React from "react";
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product({ data, gettingCartData, setSearchItem }) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
      />
      <br />

      <h3 className="cart-btn">
        <Link to="cart">
          <FaShoppingCart style={{ height: "50px", width: "50px" }} />
        </Link>
      </h3>

      <div>
        {data.map((items) => {
          return (
            <div key={items.id} className="main-div">
              <div className="img-div">
                <img className="img" src={items.thumbnail}></img>
              </div>
              <div className="info-div">
                <h2>{items.title}</h2>
                <p>{items.category}</p>
                <p>{items.description}</p>
                <h4>Price : {items.price} $</h4>
                <br />
                <button onClick={() => gettingCartData(items)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
