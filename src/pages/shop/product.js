import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="Error" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price} Rs</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        ADD To Cart {cartItemAmount > 0 && <>({cartItemAmount}</>}
      </button>
    </div>
  );
}
