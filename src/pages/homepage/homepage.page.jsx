import React, { useEffect, useState } from 'react';

import SearchBox from '../../components/search-box/search-box.component';
import CountryList from '../../components/country-list/country-list.component';

import './homepage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const apiData = await fetch(`https://restcountries.eu/rest/v2/all`);
    const infCountry = await apiData.json();
    setData(infCountry);
  };

  const region = [
    ...new Set(
      data.filter(item => item.region !== '').map(item => item.region)
    ),
  ];

  return (
    <div className="homepage">
      <SearchBox
        placeholder="Name a Country"
        className="search-homepage"
        handleChange="#"
      />
      <div className="regions">
        {region.map((item, i) => (
          <div key={i} className="container">
            <input className="input" type="checkbox" name={item} value={item} />
            <spam className="checkmark">{item}</spam>
          </div>
        ))}
      </div>
      <CountryList data={data} />
    </div>
  );
};

export default HomePage;
