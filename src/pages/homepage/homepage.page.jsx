import React, { useEffect, useState, useRef } from 'react';

import SearchBox from '../../components/search-box/search-box.component';
import CountryList from '../../components/country-list/country-list.component';

import './homepage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [foundCountry, setFoundCountry] = useState(data);
  const filterRegions = useRef({
    regions: [],
    search: '',
  });

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const apiData = await fetch(`https://restcountries.eu/rest/v2/all`);
    const infCountry = await apiData.json();
    setData(infCountry);
    setFoundCountry(infCountry);
  };

  const filterAndSearch = () => {
    const countrySearch = data
      .filter(country => {
        return (
          filterRegions.current.regions.length === 0 ||
          filterRegions.current.regions.includes(country.region)
        );
      })
      .filter(country => {
        return country.name
          .toLowerCase()
          .startsWith(filterRegions.current.search.toLowerCase());
      });
    setFoundCountry(countrySearch);
  };

  const regions = [
    ...new Set(
      data.filter(item => item.region !== '').map(item => item.region)
    ),
  ];

  const handleClick = name => {
    const countryName = filterRegions.current.regions.indexOf(name);
    countryName === -1
      ? filterRegions.current.regions.push(name)
      : filterRegions.current.regions.splice(countryName, 1);
    filterAndSearch();
  };

  const handleChange = e => {
    filterRegions.current.search = e.target.value;
    filterAndSearch();
  };

  return (
    <div className="homepage">
      <SearchBox
        placeholder="Name a Country"
        className="search-homepage"
        handleChange={handleChange}
      />
      <div className="regions">
        {regions.map((item, i) => (
          <div key={i} className="container">
            <input
              className="input"
              value={item}
              type="checkbox"
              onChange={() => handleClick(item)}
            />
            <span className="checkmark">{item}</span>
          </div>
        ))}
      </div>
      <CountryList data={foundCountry} />
    </div>
  );
};

export default HomePage;
