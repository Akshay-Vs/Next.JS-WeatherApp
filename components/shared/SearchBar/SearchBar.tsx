import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="h-[80%] bg-[#2c2c2f] rounded-[30px] justify-start items-center px-5 flex w-full mx-2 sm:w-[50%] sm:mx-3 ">
      <FontAwesomeIcon
        icon={faSearch}
        className="text-[#fefefe7c] text-[18px]"
      />
      <input
        type="text"
        className="search-bar__input"
        placeholder="search a city"
      />
    </div>
  );
};

export default SearchBar;
