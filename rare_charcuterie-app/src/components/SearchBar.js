import React from 'react';
import "../styles/SearchBar.css";

const SearchBar = ({keyword,setKeyword}) => {
  
  return (
    <input className='BarStyling'
     key="random1"
     value={keyword}
     placeholder={"search boards"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar