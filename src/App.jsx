
import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Header from './components/Header'
import CategoryList from './components/CategoryList'
import SubcategoryList from './components/SubcategoryList'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={
            <CategoryList />
          }>
          </Route>
          <Route path="/categories" element={
            <SubcategoryList />
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
