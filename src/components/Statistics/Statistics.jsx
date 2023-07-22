import React from 'react'
import data from '../../assets/data'
import PropTypes from 'prop-types';
import { StatisticsCard, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

const Statistics = () => {
  return (
    <StatisticsCard>
      <Title>Upload stats</Title>
      <StatList>
        {data.map(({ id, label, percentage }) => {
          return <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>;
        })}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
label: PropTypes.string,
percentage: PropTypes.number,
};

export default Statistics;