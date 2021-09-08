import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/search-box/search-box.component';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/';
import { removeCountry } from '../../redux/actions';

import './side-bar.styles.scss';

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();

  const [searchField, setSearchField] = useState('');

  const country = useSelector(state => state);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="sidebar">
          <Link to="#" className="sidebar-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <ul className="sidebar-menu-item">
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>

            <SearchBox
              placeholder="Favorite Search"
              className="search"
              handleChange={handleChange}
            />
            {country
              .filter(curr =>
                curr.name.toLowerCase().includes(searchField.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <li key={index} className="sidebar-item">
                    <img alt="flag" src={item.flag} className="flag-item" />
                    <span>{item.name}</span>
                    <button
                      className="btn btn-remove"
                      onClick={() => dispatch(removeCountry(item))}
                    >
                      -
                    </button>
                  </li>
                );
              })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
