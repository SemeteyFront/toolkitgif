import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchAction } from '../../redux/Search'
import  InfiniteScroll  from 'react-infinite-scroll-component'
let counter = 20
function Subcategories({name}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SearchAction(name, counter))
  }, [dispatch])
  const subcategories = useSelector(state => state.search.searchData.data)
  console.log(subcategories)
  const subCategoryImg = subcategories && subcategories.map(item => <p key={item.images?.fixed_height?.url}><img src={item.images.fixed_height.url}/> </p>)
  const fetchMoreEnd = () => {
    if (counter > 199){
        alert("GIFs are over")
    } else {
        setTimeout(() => {
            counter += 5
            dispatch(SearchAction(name,counter));
        }, 1500)
    }
}
  return (
    <div>
            <h1>{name}</h1>
            <div>
                <div>
                    <InfiniteScroll
                        dataLength={counter}
                        next={fetchMoreEnd}
                        hasMore={true}
                        loader={<h4>Загрузка5dwa</h4>}
                    >
                    <div>
                        {subCategoryImg}
                    </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
  )
}

export default Subcategories