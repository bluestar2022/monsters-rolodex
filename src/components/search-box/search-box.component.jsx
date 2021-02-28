import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({place_holder, handleChange}) => (
        <input className='search' type='search' placeholder={place_holder} onChange={handleChange} />
);