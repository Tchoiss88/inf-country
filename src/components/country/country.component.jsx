import React from 'react';

import './country.styles.scss';

import ButtonAdd from '../button-add/button-add.component';
import ButtonInfo from '../button-info/button-info.component';

const Country = props => {
  return (
    <div className="country">
      <ButtonAdd />
      <ButtonInfo />
      <img alt="flag" src={props.flag} className="flag-page" />
      <span>{props.country}</span>
    </div>
  );
};

export default Country;
