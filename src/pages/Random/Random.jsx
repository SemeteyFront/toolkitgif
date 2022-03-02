import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomAction } from '../../redux/Random'

function Random() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.random.datas.data)
  useEffect(() => {
    dispatch(randomAction())
  }, [dispatch])
  return (
    <div>
      <img src={data && data.images?.downsized?.url}/>
    </div>
  )
}

export default Random