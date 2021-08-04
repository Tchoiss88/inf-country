import React from 'react';

import * as BsIcons from 'react-icons/bs';
import './button-remove.styles.scss';

const ButtonRemove = () => {
  return (
    <div className="button-remove">
      <BsIcons.BsTrash />
    </div>
  );
};

export default ButtonRemove;
