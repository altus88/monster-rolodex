import React from 'react'

import './search-box.style.css'

export const SearchBox = ({placeholder, onChangeHandler}) => (
    <input className='search' type = "search" placeholder = {placeholder} onChange = {onChangeHandler} />  
);