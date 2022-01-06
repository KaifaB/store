import React from "react";
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer";

class Home extends React.Component {
    render() {
      return(
        <div className="home">
          <div className="welcome-back">
            <div className="welcome">
              <h1>Grounded Baked Goods</h1>
              <Link to="/shop"><button>SHOP NOW</button></Link>
            </div>
          </div>
          <div className="grid">
            <Link to="/shop/cakes" className="item item-1"><p>Cakes</p></Link>
            <Link to="/shop/pies" className="item item-2"><p>Pies</p></Link>
            <Link to="/shop/cupcakes" className="item item-3"><p>Cupcakes</p></Link>
            <Link to="/shop/scones" className="item item-4"><p>Scones</p></Link>
          </div>
          <div className="news">
            <h1>Newsletter</h1>
            <p>Get timely updates on your favorite products.</p>
            <input placeholder="Your email" />
          </div>
          <Footer />
        </div>
      )
    }
  }
    
  export default Home;