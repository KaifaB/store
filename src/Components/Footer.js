import React from "react";

import Icon from '../img/icon.png'

function Footer() {
  return (
    <div className="footer">
      <div>
          <div>
            <h1>Grounded</h1>
            <p>Lorem Ipsum thidsa dfs gas fsavdsgsd vdsvevsdsvd</p>
            <div className="socials">

            </div>
          </div>
          <div>
            <h2>Links</h2>
            <ul>
              <li>Home</li>
              <li>Cakes</li>
              <li>Pies</li>
              <li>Cupcakes</li>
              <li>Scones</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Terms</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <p>(+1) 310-456-7890</p>
            <p>groundedbakery@gmail.com</p>
          </div>
      </div>
      <div className="footer-bottom">
        <img src={Icon} alt="footer-icon" className="icon" />
      </div>
    </div>
  );
}

export default Footer;
