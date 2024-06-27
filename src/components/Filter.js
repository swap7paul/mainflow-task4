import React from 'react';
import './Filter.css';

function Filter({ setFilter }) {
  return (
    <div className="filter-container">
      <button onClick={() => setFilter('all')} className="filter-button">All</button>
      <button onClick={() => setFilter('active')} className="filter-button">Active</button>
      <button onClick={() => setFilter('completed')} className="filter-button">Completed</button>
    </div>
  );
}

export default Filter;
