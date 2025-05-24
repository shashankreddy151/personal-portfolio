import React from 'react';
import Table from './Table.jsx';
import data from '../../data/stats/personal.jsx';

const PersonalStats = () => (
  <>
    <h3>Some stats about me</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
