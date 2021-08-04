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
      <SearchBox placeholder="Name a Country" />
      <div className="regions">
        {region.map((item, i) => (
          <div key={i} className="input-region">
            <input
              className="input-box"
              type="checkbox"
              name={item}
              value={item}
            />
            <label className="input-label">{item}</label>
          </div>
        ))}
        <CountryList data={data} />
      </div>
    </div>
  );
};

export default HomePage;
