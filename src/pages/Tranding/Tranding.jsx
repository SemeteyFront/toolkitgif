import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trandingAction } from '../../redux/Tranding'
import InfiniteScroll from 'react-infinite-scroll-component'
let counter = 20

function Tranding() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.tranding.todos.data)
  useEffect(() => {
    dispatch(trandingAction(counter))
  }, [dispatch])
  const tranding = data && data.map(item => <p key={item.id}><img src={item.images?.downsized?.url}/></p>)
  const fetchMoreTrending = () => {
    if (counter > 199){
        alert("GIFs are over")
    } else {
        setTimeout(() => {
            counter += 5
            dispatch(trandingAction(counter));
        }, 1500)
    }
}

const resetBtn = () => {
  window.location.reload();
}
  
  return (
    <div>
      <h2>Trending</h2>
      <div>
        { counter > 190 ?<div>
          <h1>No more picture</h1>
          <button onClick={resetBtn}> Refresh </button>
        </div> :
            <InfiniteScroll
                dataLength={counter}
                next={fetchMoreTrending}
                hasMore={true}
                loader={<h4>Загрузка</h4>}
            >
                <div className="gif">
                    {tranding}
                </div>
            </InfiniteScroll>
        }
      </div>
  </div>
  )
}

export default Tranding