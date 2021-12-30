import React from "react"
import { useLocation } from "react-router-dom";
import AddCart from "../img/cart-add.png"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            search : props.search,
            setSearch : props.setSearch,
            setFilter : props.setFilter,
            filter : props.filter,
            cart : props.cart,
            addToCart : props.addToCart,
        }
      };
    
    render() {
        //console.log(this.props.cart)

        return(
            <div className="shop">
                {this.state.wholeCart}
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
                    <input type="checkbox" onChange={ e => 
                        this.state.setFilter(prevState => ({
                            ...prevState, "cakes" : e.target.checked    })
                        )
                    } />
                    <p>Cupcakes</p>
                    <input type="checkbox" onChange={ e => 
                        this.state.setFilter(prevState => ({
                            ...prevState, "pies" : e.target.checked    })
                        )
                    } />
                    <p>Pies</p>
                    <input type="checkbox" onChange={ e => 
                        this.state.setFilter(prevState => ({
                            ...prevState, "cupcakes" : e.target.checked    })
                        )
                    } />
                    <p>Scones</p>
                    <input type="checkbox" onChange={ e => 
                        this.state.setFilter(prevState => ({
                            ...prevState, "scones" : e.target.checked    })
                        )
                    } />
                </div>
                <div className="products">
                    {this.props.products.map((curr, key) => {
                        //console.log(curr.categories[0].slug)
                        if ((this.props.filter.cakes && this.props.filter.cupcakes && this.props.filter.scones && this.props.filter.pies) || 
                        (this.props.filter.cakes === this.props.filter.cupcakes === this.props.filter.scones === this.props.filter.pies)){
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
                                    <img className="add-cart" src={AddCart} alt="cart-add" onClick={() => this.state.addToCart(curr.id, 1)}/>
                                </div>
                            </div>
                        )
                        } else {
                            if (this.props.filter.cakes && curr.categories[0].slug === "cakes"){
                                if (curr.categories[0].slug === "cakes"){
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
                                            <img className="add-cart" src={AddCart} alt="cart-add" />
                                        </div>
                                    </div>
                                    )
                                }
                            }
                        }
                        return 0;
                    })}
                </div>
            </div>
        )
    }
}
export default Shop;