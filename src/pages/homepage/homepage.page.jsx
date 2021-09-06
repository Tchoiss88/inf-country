import React, { useEffect, useState } from 'react';

import SearchBox from '../../components/search-box/search-box.component';
import CountryList from '../../components/country-list/country-list.component';

import './homepage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [foundCountry, setFoundCountry] = useState(data);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const apiData = await fetch(`https://restcountries.eu/rest/v2/all`);
    const infCountry = await apiData.json();
    setData(infCountry);
    setFoundCountry(infCountry);
  };

  const region = [
    ...new Set(
      data.filter(item => item.region !== '').map(item => item.region)
    ),
  ];

  const handleChange = e => {
    let keyword = e.target.value;

    if (keyword !== '') {
      const results = data.filter(country => {
        return country.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundCountry(results);
    } else {
      setFoundCountry(data);
    }
  };

  return (
    <div className="homepage">
      <SearchBox
        placeholder="Name a Country"
        className="search-homepage"
        handleChange={handleChange}
      />
      <div className="regions">
        {region.map((item, i) => (
          <div key={i} className="container">
            <input className="input" type="checkbox" name={item} value={item} />
            <span className="checkmark">{item}</span>
          </div>
        ))}
      </div>
      <CountryList data={foundCountry} />
    </div>
  );
};

export default HomePage;
