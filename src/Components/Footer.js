import React from "react";

import Icon from '../img/icon.png'

function Footer() {
  return (
    <div className="footer">
      <div>
          <div>
                <div>
                    <h1>Contact</h1>
                </div>
                <div>
                    <p>(+1) 310-456-7890</p>
                    <p>groundedbakery@gmail.com</p>
                </div>
          </div>
          <div>
                <div>
                    <h1>Socials</h1>
                </div>
                <div>

                </div>
          </div>
      </div>
      <div className="footer-bottom">
        <img src={Icon} className="icon" />
      </div>
    </div>
  );
}

export default Footer;
