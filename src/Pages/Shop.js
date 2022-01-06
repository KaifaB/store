import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import AddCart from "../img/cart-add.png"

const Shop = ({ products, setSearch, search, setFilter, filter, addToCart, cart }) => {
    let { paramType } = useParams();
    //RUNS ONCE
    useEffect(() => {
        if (paramType) {
            setFilter([paramType])
            paramType = ''
        }
    }, [paramType] )

    useEffect(() => {
        let inputs = document.getElementsByClassName("checks")
        Array.from(inputs).forEach((curr) => {
            curr.checked = false
            if (filter.includes(curr.value)){
                curr.checked = true
            }
        })
        console.log(filter)
    }, [search, filter])

    const filterToggle = (value) => {
        const currentIndex = filter.indexOf(value)
        const newChecked = [...filter]
        //console.log(newChecked)
        if(currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setFilter(newChecked)
    }
    return(
        <div className="shop">
            <div className="filter">
                <h1>Search</h1>
                <input id="searchInput" type="text" onChange={e => {
                    let temp = e.target.value;
                    document.getElementById("searchInput").value = temp; 
                    setSearch(temp);
                    }}>
                </input>
                <h1>Filter</h1>
                <p>Cakes</p>
                <input type="checkbox" className="checks" value="cakes" onChange={ e => {
                    let val = e.target.value;
                    filterToggle(val)
                }} />
                <p>Pies</p>
                <input type="checkbox" className="checks" value="pies" onChange={ e => {
                    let val = e.target.value;
                    filterToggle(val)
                }} />
                <p>Cupcakes</p>
                <input type="checkbox" className="checks" value="cupcakes" onChange={ e => {
                    let val = e.target.value;
                    filterToggle(val)
                }} />
                <p>Scones</p>
                <input type="checkbox" className="checks" value="scones" onChange={ e => {
                    let val = e.target.value;
                    filterToggle(val)
                }} />
            </div>
            <div className="products">
                {products.filter((curr) => {
                    if (search === '' && filter.length === 0) {
                        return curr
                    } else if (search === '' && filter.includes(curr.categories[0].slug)){
                        return curr
                    } else if (curr.name.toLowerCase().includes(search.toLowerCase()) && filter.includes(curr.categories[0].slug)) {
                        return curr
                    } else if (curr.name.toLowerCase().includes(search.toLowerCase()) && (filter.length === 0)){
                        return curr
                    }
                }).map((curr, key) => {
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
                                <img className="add-cart" src={AddCart} alt="cart-add" onClick={() => addToCart(curr.id, 1)}/>
                            </div>
                        </div>
                    )
                    /*else {
                        if (filter.cakes && curr.categories[0].slug === "cakes"){
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
                    }*/
                })}
            </div>
        </div>
    )
}
export default Shop;