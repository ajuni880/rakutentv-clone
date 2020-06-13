import React from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = ({ item }) => (
  <li className="dropdown__item">
    <Link className="hover--secondary" to={item.to}>
      {item.label}
    </Link>
  </li>
);

export default DropdownItem;