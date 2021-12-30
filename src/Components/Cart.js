import React from "react";
import { Link } from "react-router-dom"
import Exit from "../img/exit.png"

function Cart({ cart, updateQuantity, removeItem, emptyCart }) {
  const exit = () => {
    var cart = document.getElementById("blur-cart")
    cart.classList.remove("show")
  }
  const EmptyCart = () =>{
    return(
      <h3>Cart Empty</h3>
    )
  }
  const FilledCart = () => {
    return(
    <>
      {cart.line_items.map((curr,key) => {
        return(
          <div className="contain-item" key={key}>
            <img src={curr.image.url} alt={curr.image.id} />
            <div className="item-info">
              <div className="item-name">
                <h1>{curr.name}</h1>
              </div>
              <div className="item-quantity">
                <div className="remove">
                  <button onClick={() => removeItem(curr.id)}>Remove Item</button>
                </div>
                <div className="quantity">
                  <button onClick={() => updateQuantity(curr.id, (curr.quantity - 1))}>-</button>
                  <input type="text" disabled value={curr.quantity}></input>
                  <button onClick={() => updateQuantity(curr.id, (curr.quantity + 1))}>+</button>
                </div>
                <div className="cost">
                  <h1>{curr.line_total.formatted_with_symbol}</h1>
                </div>
              </div>
            </div>
          </div>    
        )
      })}
      <div className="total">
        <div>
          <button id="empty" onClick={() => emptyCart()}>Empty Cart</button>
        </div>
        <div>
          <h1>Tax: ${(Math.round((cart.subtotal.raw * 0.09) * 100) / 100).toFixed(2)}</h1>
          <h1>Total: ${(Math.round((cart.subtotal.raw * 1.09) * 100) / 100).toFixed(2)}</h1>
          <Link to="/checkout" onClick={() => {document.getElementById("blur-cart").classList.remove("show")}}><button id="checkout">Checkout</button></Link>
        </div>
      </div>
    </>
    )
  }

  if (!cart.line_items) {
    return "Loading..."
  } else
  return (
    <div className="blur-cart" id="blur-cart">
        <div className="whole-cart">
          <div className="cart-top">
            <h1>Your Cart</h1>
            <div className="contain-exit">
              <img className="exit" src={Exit} onClick={exit} alt="exit" />
            </div>
          </div>
          <div className="cart-contents">
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
          </div>
        </div>
    </div>
  );
}

export default Cart;
