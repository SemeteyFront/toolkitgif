import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { categoriesActions } from '../redux/Categories'
import Categories from '../components/Categories'
import Random from '../pages/Random';
import Tranding from '../pages/Tranding';
import Subcategories from '../components/Subcategories'
import Gifcategories from '../components/Gifcategories'

function RouterPage() {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categName.data)
  const gifcategory = categories && categories.map(item => 
    <Route 
      key={item.name_encoded} 
      path={`/${item.name_encoded}`} 
      element= {<Gifcategories 
        name={item.name_encoded}
      />}
    />)
  const subCategories = categories && categories.map((item) => 
    item.subcategories.map(item => 
      <Route
        key={item.name_encoded}
        path={`/${item.name_encoded}`}
        element={ <Subcategories 
          name={item.name_encoded} 
      />}
    />
    )
  )
  useEffect(() => {
    dispatch(categoriesActions())
  }, [dispatch])
  return (
    <div>
      <Categories categories={categories} />
      <Routes>
        <Route path={'/'} element = { <Tranding />} />
        <Route path={'/random'} element = { <Random />} />
        {subCategories}
        {gifcategory}
      </Routes>
    </div>
  )
}

export default RouterPage