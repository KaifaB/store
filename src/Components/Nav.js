import React from "react";

import { Link } from 'react-router-dom'
import Icon from '../img/icon.png'
import Cart from "../img/cart-add.png"

function Nav({totalItems}) {
  const showCart = () => {
    var cart = document.getElementById("blur-cart")
    cart.classList.add("show")
  }
  return (
    <div className="nav">
      <Link to="/"><img className="icon" src={Icon} alt="store-icon" /></Link>
      <ul>
        <li></li>
        <Link to="/shop"><li>Cakes</li></Link>
        <Link to="/shop"><li>Pies</li></Link>
        <Link to="/shop"><li>Muffins</li></Link>
        <Link to="/shop"><li>Cupcakes</li></Link>
        <Link to="/recipes"><li>Recipes</li></Link>
      </ul>
      <div className="cart-contain" onClick={showCart}>
        <img className="cart" src={Cart} alt="cart" />
        {totalItems ?
        <p className="cart-num">{totalItems}</p>
        : 
        <p className="cart-num">0</p>
        }
      </div>
    </div>
  );
}

export default Nav;
