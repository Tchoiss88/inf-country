import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountry } from '../../redux/actions';

import './country.styles.scss';

const Country = props => {
  const dispatch = useDispatch();
  const [countryInfo, setCountryInfo] = useState(false);
  const showCountryInfo = () => setCountryInfo(!countryInfo);

  const favorite = useSelector(state => state);
  const findFavorite = favorite.find(curr => curr === props.country);

  return (
    <div className="country-container">
      <div className="country">
        {!findFavorite && (
          <button
            className="btn btn-add"
            onClick={() => {
              dispatch(addCountry(props.country));
            }}
          >
            +
          </button>
        )}

        <button className="btn btn-info" onClick={showCountryInfo}>
          Info
        </button>
        <img alt="flag" src={props.country.flag} className="flag-page" />
        <span>{props.country.name}</span>
      </div>
      <div
        className={countryInfo ? 'countryInfo-menu active' : 'countryInfo-menu'}
      >
        <img alt="flag" src={props.country.flag} className="flag-info" />
        <br />
        <span>Name: {props.country.name}</span>
        <br />
        <span>Capital: {props.country.capital}</span>
        <br />
        <span>Region: {props.country.region}</span>
        <br />
        <span>Population: {props.country.population}</span>
        <br />
        <span>Area: {props.country.area}</span>
      </div>
    </div>
  );
};

export default Country;
