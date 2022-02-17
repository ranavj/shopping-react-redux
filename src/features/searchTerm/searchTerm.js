import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchTerm, selectSearchTerm, setSearchTerm } from './searchTermSlice';
const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';
export const SearchTerm = () => {

    const searchTerm = useSelector(selectSearchTerm);

    const dispatch = useDispatch();

    const onSearchHandler = (e) => {
        const term = e.target.value;
        console.log(term)
        dispatch(setSearchTerm(term))
    }

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm())
    }

    return(
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input id="search" type="text" placeholder="Search recipes" value={searchTerm}  onChange={onSearchHandler} />
            {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                <img src={clearIconUrl} alt="" />
                </button>
            )}
        </div>
    )
}