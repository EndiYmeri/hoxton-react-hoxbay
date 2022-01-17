import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import Home from './pages/Products'
import Product from './pages/Product'
import SingleCategory from './pages/SingleCategory'
import Products from './pages/Products'




function App() {

  const [basket, setBasket] = useState([])
  
  return (  
    <>
      <Header />
      <main>
        {
          <React.StrictMode>
            <Routes>
              <Route index element = {<Navigate replace to='/products' />} />
              <Route path='/products' element = {<Products/>} />
              <Route path='/categories' element = {<Categories />} />
              <Route path='/categories/:id' element = {<SingleCategory/>} />
              <Route path='/products/:id' element = {<Product basket={basket} setBasket={setBasket} />} />
              <Route path='/basket' element = {<Basket basket={basket} setBasket={setBasket} />} />
            </Routes>
            </React.StrictMode>
        }
      </main>
    </>
  )
}

export default App
