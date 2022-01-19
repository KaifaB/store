import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//CommerceJS key info
import { commerce } from '../Commerce/Commerce'
//Pages
import Home from './Home'
import Shop from './Shop'
import CheckOut from './CheckOut'
//Components
import Nav from '../Components/Nav'
import Cart from "../Components/Cart"
//CSS
import '../App.css'

function App() {
  //state initiations
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  //function to fetch products list
  const fetchProducts = async () => {
    const { data } =  await commerce.products.list()
    setProducts(data)
  }
  //function to fetch your cart
  const fetchCart = async () => {
    const items = await commerce.cart.retrieve()
    setCart(items)
  }
  //function to show us our cart when navbar cart-icon clicked
  const showCart = () => {
    document.getElementById("blur-cart").classList.add("show")
  }
  //fundtion to add an item to cart
  const addToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity)
    setCart(response.cart)

    showCart();
  }
  //fundtion to update cart-item's quantity
  const updateQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity })

    setCart(response.cart)
  }
  //fundtion to remove an item from cart
  const removeItem = async (productId) => {
    const response = await commerce.cart.remove(productId)

    setCart(response.cart)
  }
  //function to empty your entire cart
  const emptyCart = async () => {
    const response = await commerce.cart.empty()

    setCart(response.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

      setOrder(incomingOrder)
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  return (
    <div className="App">
      <Router >
        <Nav totalItems={cart.total_items} />
        <Cart
          cart={cart} 
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          emptyCart={emptyCart}
        />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="/shop" element={<Shop 
            products={products} 
            setSearch={setSearch} 
            search={search} 
            setFilter={setFilter} 
            filter={filter}
            addToCart={addToCart}
            cart={cart}
            />}
          />
          <Route path="/shop/:paramType" element={<Shop 
            products={products} 
            setSearch={setSearch} 
            search={search} 
            setFilter={setFilter} 
            filter={filter}
            addToCart={addToCart}
            cart={cart}
            />}
          />
          <Route element={<CheckOut setCart={setCart} cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} path="/checkout"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
