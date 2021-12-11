import React from "react";
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
      return(
        <div className="home">
          <div className="welcome-back">
            <div className="welcome">
              <h1>Grounded Baked Goods</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="grid">
            <Link to="/shop#cakes" className="item item-1">Cakes</Link>
            <Link to="/shop#pies" className="item item-2">Pies</Link>
            <Link to="/shop#cupcakes" className="item item-3">Cupcakes</Link>
            <Link to="/shop#muffins" className="item item-4">Muffins</Link>
            <Link to="/shop#scones" className="item item-5">Scones</Link>
          </div>
        </div>
      )
    }
  }
    
  export default Home;