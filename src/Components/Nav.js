import React from "react";

import Icon from '../img/icon.png'

function Nav() {
  return (
    <div className="nav">
      <img className="icon" src={Icon} alt="store-icon" />
      <ul>
        <li></li>
        <li>Cakes</li>
        <li>Pies</li>
        <li>Muffins</li>
        <li>Cupcakes</li>
        <li>Recipes</li>
      </ul>
    </div>
  );
}

export default Nav;
