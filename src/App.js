import "./App.css";
import { useState, useEffect } from "react";
import Item from "./components/Item";
import Total from "./components/Total";

function App() {
  const [cart, setCart] = useState([]);
  let amount = 0;
  let itemCount = 0;

  useEffect(async () => {
    let data = await fetch("https://fakestoreapi.com/products?limit=6");
    let result = await data.json();
    setCart(result);
    getItems();
  }, []);
  console.log(cart);

  return (
    <>
      <h1 className="mycart">
        Sepetim ({cart.length})<h4>ürün</h4>
      </h1>
      <main>
        <div className="itemsList">
          {cart.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>

        {
          (cart.forEach((item) => (amount = amount + item.price)),
          (<Total totalPrice={amount.toFixed(2)} />))
        }
      </main>
    </>
  );
  function getItems() {
    let cartItems = document.querySelectorAll(".cartItem");
    cartItems.forEach((item, index) => {
      itemCount = cartItems.length;
      item.querySelector(".delete").classList.add("visible");
      item.addEventListener("click", (e) => {
        switch (e.target.textContent) {
          case "+": {
            let count = item.querySelector(".amount").textContent;
            let productprice = item.querySelector(".details h2").textContent;
            count++;
            if (count > 1) {
              item.querySelector(".delete").classList.remove("visible");
            }
            item.querySelector(".amount").textContent = count;
            item.querySelector(".details h5").textContent =
              (productprice * count).toFixed(2) + "TL.";
            let totalprice = Math.max(
              document.querySelector(".checkout h4").textContent
            );
            let cargofreeprice = totalprice + productprice * count;
            if (cargofreeprice > 500) {
              document.querySelector(".freeshipping").classList.add("visible");
              document
                .querySelector(".cargoamountTL")
                .classList.add("cargopricedelete");
            } else {
              document
                .querySelector(".freeshipping")
                .classList.remove("visible");
              document
                .querySelector(".cargoamountTL")
                .classList.remove("cargopricedelete");
            }
            document.querySelector(".checkout h4").textContent = Math.fround(
              totalprice + productprice * 1
            ).toFixed(2);
            document.querySelector(".order-amount").textContent =
              document.querySelector(".checkout h4").textContent + "TL";
            break;
          }
          case "-": {
            let count = item.querySelector(".amount").textContent;
            if (count != 1) {
              let productprice = item.querySelector(".details h2").textContent;
              count--;

              if (count < 2) {
                item.querySelector(".delete").classList.add("visible");
              }

              item.querySelector(".details h5").textContent =
                (productprice * count).toFixed(2) + "TL.";
              let totalprice = Math.max(
                document.querySelector(".checkout h4").textContent
              );
              let cargofreeprice = totalprice - productprice * count;
              if (cargofreeprice < 500) {
                document
                  .querySelector(".freeshipping")
                  .classList.add("visible");
                document
                  .querySelector(".cargoamountTL")
                  .classList.add("cargopricedelete");
              } else {
                document
                  .querySelector(".freeshipping")
                  .classList.remove("visible");
                document
                  .querySelector(".cargoamountTL")
                  .classList.remove("cargopricedelete");
              }
              document.querySelector(".checkout h4").textContent = Math.fround(
                totalprice - productprice * 1
              ).toFixed(2);
            }
            item.querySelector(".amount").textContent = count;
            document.querySelector(".order-amount").textContent =
              document.querySelector(".checkout h4").textContent + "TL";
            break;
          }
          case "SİL": {
            let productprice = item.querySelector(".details h2").textContent;
            let totalprice = Math.max(
              document.querySelector(".checkout h4").textContent
            );
            document.querySelector(".checkout h4").textContent = Math.max(
              totalprice - productprice * 1
            ).toFixed(2);
            document.querySelector(".order-amount").textContent =
              document.querySelector(".checkout h4").textContent + " TL";
            cartItems.item(index).style.animation = "removeanimation .5s ease";
            cartItems.item(index).addEventListener("animationend", () => {
              cartItems.item(index).remove();
              itemCount--;
              document.querySelector(".mycart").textContent =
                itemCount + "Ürün Kaldı";
            });
            break;
          }
        }
      });
    });
  }
}

export default App;
