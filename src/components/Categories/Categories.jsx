import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { categoriesActions } from '../../redux/Categories'

function Categories({categories}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(categoriesActions())
  }, [])
  const category = categories && categories.map(item => 
    <p key={item.name_encoded}><Link to={`/${item.name_encoded}`}>{item.name_encoded}</Link></p>  
  )
  return (
    <div>
      {
        category ? category : <h3>Загрузка</h3>
      }
    </div>
  )
}

export default Categories