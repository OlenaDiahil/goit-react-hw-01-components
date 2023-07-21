import React from 'react'
import PropTypes from 'prop-types';

const StatisticsLi = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};


StatisticsLi.propTypes = {
label: PropTypes.string,
percentage: PropTypes.number,
};

export default StatisticsLi;