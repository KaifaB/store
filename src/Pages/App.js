import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { commerce } from '../Commerce/Commerce'
//Pages
import Home from './Home'
import Shop from './Shop'
//Components
import Nav from '../Components/Nav'

import '../App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({ 'cakes': false, 'pies': false, 'cupcakes': false, 'scones' : false })

  const fetchProducts = async () => {
    const { data } =  await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [search, filter])
  return (
    <div className="App">
      <Nav />
      <Router >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Shop 
            products={products} 
            setSearch={setSearch} 
            search={search} 
            setFilter={setFilter} 
            filter={filter}
            addToCart={addToCart}
          />} 
          path="/shop" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
