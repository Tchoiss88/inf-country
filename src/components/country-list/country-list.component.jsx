import React from 'react';

import Country from '../country/country.component';

import './country-list.styles.scss';

const CountryList = props => {
  return (
    <div className="country-list">
      {props.data.map(curr => (
        <Country key={curr.numericCod} country={curr.name} flag={curr.flag} />
      ))}
    </div>
  );
};

export default CountryList;
