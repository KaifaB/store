import React from "react";
import { Link } from 'react-router-dom'
import AddCart from "../img/cart-add.png"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            search : props.search,
            setSearch : props.setSearch,
            setFilter : props.setFilter,
            filter : props.filter
        }
      };
    
    render() {


        return(
            <div className="shop">
                <div className="filter">
                    <h1>Search</h1>
                    <input id="searchInput" type="text" onChange={e => {
                        let temp = e.target.value;
                        document.getElementById("searchInput").value = temp; 
                        this.state.setSearch(temp);
                        }}>
                    </input>
                    <h1>Filter</h1>
                    <p>Cakes</p>
                    <input type="checkbox" onChange={(e) => this.state.setFilter({...this.state.filter, "cakes" : e.target.checked})} />
                    <p>Cupcakes</p>
                    <input type="checkbox" onChange={(e) => this.state.setFilter({...this.state.filter, "pies" : e.target.checked})} />
                    <p>Pies</p>
                    <input type="checkbox" onChange={(e) => this.state.setFilter({...this.state.filter, "cupcakes" : e.target.checked})} />
                    <p>Scones</p>
                    <input type="checkbox" onChange={(e) => this.state.setFilter({...this.state.filter, "scones" : e.target.checked})} />
                </div>
                <div className="products">
                    {this.props.products.map((curr, key) => {
                        return(
                            <div className="card" key={key}>
                                <div>
                                    <img className="card-image" src={curr.image.url} alt={curr.id + ".jpeg"}/>
                                    <div className="flex-apart title-price">
                                        <p>{curr.name}</p>
                                        <p>{curr.price.formatted_with_symbol}</p>
                                    </div>
                                    <p className="desc">{curr.description.slice(3, -4)}</p>
                                </div>
                                <div className="addcart-contain">
                                    <img className="add-cart" onClick="" src={AddCart} alt="cart-add" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Shop;