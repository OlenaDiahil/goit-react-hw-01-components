import React from 'react'
import data from '../../assets/data'
import StatisticsLi from 'components/StatisticsLi/StatisticsLi'

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => {
          return <StatisticsLi key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;