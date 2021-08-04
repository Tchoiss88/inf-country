import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/search-box/search-box.component';
import ButtonRemove from '../../components/button-remove/button-remove.component';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/';

import { SidebarData } from '../../data/sidebar.data';
import './side-bar.styles.scss';

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

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
            {/* TODO Fucntionaliti */}
            <SearchBox placeholder="Favorite Search" />
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="sidebar-item">
                  <img alt="flag" src={item.flag} className="flag-item" />
                  <span>{item.name}</span>
                  <ButtonRemove />
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
