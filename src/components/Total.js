import React from "react";
import "./total.css";

const Total = ({ totalPrice }) => {
  console.log(totalPrice);
  return (
    <>
      <div className="checkout">
        <h1>ÖDENECEK TUTAR</h1>
        <div className="money">
          <h4>{totalPrice}</h4>
          <p>TL</p>
        </div>
        <button>Alışverişi Tamamla</button>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          eveniet facere, nisi hic ullam vel veritatis consequuntur iusto
          dignissimos rerum ad repudiandae magnam nostrum doloremque eligendi
          cumque quo quasi? Deserunt?
        </p>
        <div className="cargo">
          <div className="cargo-amount">
            <p>Kargo</p>
            <p className="freeshipping">Bedava</p>
            <p className="cargoamountTL">12 TL</p>
          </div>
          <div className="order-total">
            <p>Ürünler</p>
            <p className="order-amount">{totalPrice} TL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
