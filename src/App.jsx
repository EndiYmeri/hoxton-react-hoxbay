import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import Home from './pages/Products'
import Product from './pages/Product'
import SingleCategory from './pages/SingleCategory'
import Products from './pages/Products'
import Search from './pages/Search'




function App() {
  const [itemsToShow, setItemsToShow] = useState()
  
  const [searchTerm, setSearchTerm] = useState('')

  const [basket, setBasket] = useState([])

  return (  
    <>
      <Header setSearchTerm={setSearchTerm} />
      <main>
        {
          <React.StrictMode>
            <Routes>
              <Route index element = {<Navigate replace to='/products' />} />
              <Route path='/products' element = {<Products itemsToShow={itemsToShow} setItemsToShow={setItemsToShow}/>} />
              <Route path='/search' element = {<Search itemsToShow={itemsToShow} setItemsToShow={setItemsToShow} searchTerm={searchTerm}/>} />
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
