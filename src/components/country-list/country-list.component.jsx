import React from 'react';

import Country from '../country/country.component';

import './country-list.styles.scss';

const CountryList = props => {
  return (
    <div className="country-list">
      {props.data.map((curr, i) => (
        <Country key={`countryList${i}`} country={curr} />
      ))}
    </div>
  );
};

export default CountryList;
