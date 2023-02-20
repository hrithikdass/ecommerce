import React from "react";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="Error" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price} Rs</p>
      </div>
      <button className="addToCartBttn">ADD To Cart</button>
    </div>
  );
}
