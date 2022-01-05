import React from "react";
import { Link } from 'react-router-dom'

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
            <Link to={
          {
            pathname: "/shop",
            state: {
              type: "cakes"
            }
          }
        } className="item item-1">Cakes</Link>
            <Link to={
          {
            pathname: "/shop",
            state : {
              type: "pies"
            }
          }
        } className="item item-2">Pies</Link>
            <Link to={
          {
            pathname: "/shop",
            state: {
              type: "cupcakes"
            }
          }
        } className="item item-3">Cupcakes</Link>
            <Link to={
          {
            pathname: "/shop",
            state: {
              type: "scones"
            }
          }
        } className="item item-4">Scones</Link>
          </div>
        </div>
      )
    }
  }
    
  export default Home;