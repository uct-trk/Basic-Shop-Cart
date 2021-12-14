import React from "react";
import "./item.css";

const Item = ({ item }) => {
  let { price } = item;
  return (
    <div className="cartItem" id={item.id}>
      <img src={item.image} alt={item.title} />
      <div className="details">
        {item.title}
        <h6>{item.category}</h6>
        <h5>
          {price}
          <span>TL</span>
        </h5>
        <h2>{price}</h2>
        <button className="delete">SİL</button>
      </div>
      <div className="quantity">
        <button className="plus">+</button>
        <p className="amount">1</p>
        <button className="mines">-</button>
      </div>
    </div>
  );
};

export default Item;
