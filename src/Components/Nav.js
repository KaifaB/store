import React, { useState } from "react";

import { Link } from 'react-router-dom'
import Icon from '../img/icon.png'
import Cart from "../img/cart-add.png"
import Search from "../img/search.png"

function Nav({totalItems}) {
  const showCart = () => {
    var cart = document.getElementById("blur-cart")
    cart.classList.add("show")
  }
  const [navSearch, setNavSearch] = useState('')

  return (
    <div className="nav">
      <Link to="/"><img className="icon" src={Icon} alt="store-icon" /></Link>
      <ul>
        <Link to="/shop/cakes"><li>CAKES</li></Link>
        <Link to="/shop/pies"><li>PIES</li></Link>
        <Link to="/shop/cupcakes"><li>CUPCAKES</li></Link>
        <Link to="/shop/scones"><li>SCONES</li></Link>
        <Link to="/recipes"><li>RECIPES</li></Link>
      </ul>
      <div className="contain-search">
        <input type="text" className="nav-search" onChange={(e) => {setNavSearch(e.target.value);console.log(navSearch)}}/>
        <Link to={"/shop/"+navSearch}><img src={Search} /></Link>
      </div>
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
