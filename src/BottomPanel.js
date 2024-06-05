// BottomPanel.js
import React from 'react';

function BottomPanel({ onSort, onShuffle, sorted, initializeHeights }) {
  return (
    <div id="bottom-panel">
      <form>
        <div className="form-row justify-content-center m-0 mt-4">
          <div className="form-group d-flex">
            <h5 id="label">Choose Your Sort!</h5>
            {/* Implement the select element for choosing the sorting algorithm */}
          </div>
          <button
            className="btn btn-success"
            onClick={() => onSort('selectedAlgorithm')}
            disabled={sorted}
          >
            Sort
          </button>
          <button className="btn btn-danger" onClick={onShuffle}>
            Shuffle
          </button>
          <button className="btn btn-primary" onClick={initializeHeights}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default BottomPanel;
