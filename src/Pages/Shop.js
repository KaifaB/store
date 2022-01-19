import React, { useEffect } from "react"
import { useParams } from "react-router"
import AddCart from "../img/cart-add.png"
import check from "../img/check.png"

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
                <div className="filter-contain">
                    <h1>Filter</h1>
                    <div className="filter-item">
                        <input type="checkbox" className="checks" value="cakes" id="check1" onChange={ e => {
                            let val = e.target.value;
                            filterToggle(val)
                        }} />
                        <label htmlFor="check1" className="labels">
                            <div class="new-check"></div>
                            Cakes
                        </label>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="checks" value="pies" id="check2" onChange={ e => {
                            let val = e.target.value;
                            filterToggle(val)
                        }} />
                        <label htmlFor="check2" className="labels">
                            <div class="new-check"></div>
                            Pies
                        </label>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="checks" value="cupcakes" id="check3" onChange={ e => {
                            let val = e.target.value;
                            filterToggle(val)
                        }} />
                        <label htmlFor="check3" className="labels">
                            <div class="new-check"></div>
                            Cupcakes
                        </label>
                    </div>
                    <div className="filter-item">
                        <input type="checkbox" className="checks" value="scones" id="check4" onChange={ e => {
                            let val = e.target.value;
                            filterToggle(val)
                        }} />
                        <label htmlFor="check4" className="labels">
                            <div class="new-check"></div>
                            Scones
                        </label>
                    </div>
                </div>
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
                    return 0;
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