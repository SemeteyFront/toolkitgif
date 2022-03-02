import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { SearchAction } from '../../redux/Search'
import Categories from '../Categories'
import InfiniteScroll from "react-infinite-scroll-component";
let counter = 20;

const Gifcategories = ({name}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SearchAction(name, counter))
    }, [])
    const categories = useSelector(state => state.categories.categName.data)
    const resSearch = categories.find(item =>  item.name_encoded === name)
    const insideState = useSelector(state => state.search.searchData.data)
    const mapInside = insideState && insideState.map(item => <p key={item.images?.fixed_height?.url}><img src={item.images.fixed_height.url}/> </p>);
    const fetchMoreInside = () => {
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
            <Categories categories={resSearch.subcategories} />
        <div>
            <h1>{name}</h1>
                <div>
                    <div>
                        
                        <InfiniteScroll
                            dataLength={counter}
                            next={fetchMoreInside}
                            hasMore={true}
                            loader={<h4>Загрузкаffff</h4>}
                        >
                            <div>
                                {mapInside}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>

        </div>
        </div>
    );
};

export default Gifcategories;