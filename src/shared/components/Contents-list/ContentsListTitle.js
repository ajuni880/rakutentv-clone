import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

const ContentsListTitle = ({ children }) => (
  <h2 className="contents-list__title">{children}</h2>
);

ContentsListTitle.propTypes = propTypes;

export default ContentsListTitle;
