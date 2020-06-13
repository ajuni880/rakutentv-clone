import React, { cloneElement } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DropdownItem from "./DropdownItem";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  items: PropTypes.array
}

const defaultProps = {
  children: undefined,
  className: undefined,
  items: undefined
}

const Dropdown = ({ children, className, items }) => {
  return (
    <div className={`dropdown ${className || ""}`}>
      {
        cloneElement(children, {className:"dropdown__trigger" })
      }
      {items && items.length && (
        <ul className="dropdown__content">
          {items.map((item) => (
            <DropdownItem item={item} key={item.label} />
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
