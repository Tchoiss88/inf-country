import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ placeholder, handleChange, className }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
