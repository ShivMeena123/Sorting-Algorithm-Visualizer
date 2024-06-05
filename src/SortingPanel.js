// SortingPanel.js
import React from 'react';
import Bar from './Bar';

function SortingPanel({ heights }) {
  return (
    <div id="sorting-panel" className="d-flex justify-content-center">
      <div id="sort-container">
        {heights.map((height, index) => (
          <Bar key={index} height={height} />
        ))}
      </div>
    </div>
  );
}

export default SortingPanel;
