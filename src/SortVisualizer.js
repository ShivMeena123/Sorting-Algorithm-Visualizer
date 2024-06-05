// SortVisualizer.js

import React, { useEffect, useState } from 'react';
import './SortVisualizer.css';

const SortVisualizer = () => {
  const [heights, setHeights] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [ahead, setAhead] = useState(false);

  const makeBars = () => {
    const barsCount = 256;
    const newHeights = [];
    for (let i = 1; i <= barsCount / 2; i++) {
      newHeights.push(i * 3);
    }
    setHeights(newHeights);
    setRandomBars();
  };
  useEffect(()=>{
    makeBars();
    console.log("hii");
  },[])
  const setRandomBars = async () => {
    const newHeights = [...heights];
    for (let i = newHeights.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newHeights[i], newHeights[j]] = [newHeights[j], newHeights[i]];
      await timer(1);
      setHeights(newHeights);
    }
  };

  const timer = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  const swap =async (heg,firstIndex, secondIndex) => {
    const newHeights = [...heg];
    [newHeights[firstIndex], newHeights[secondIndex]] = [
      newHeights[secondIndex],
      newHeights[firstIndex],
    ];
    // setHeights(newHeights);
    heg=newHeights;
    await timer(100);
  };

  const bubbleSort = async () => {
    console.log("print");
    const len = heights.length;
    const heg=[...heights];
    for (let i = len - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (heg[j - 1] > heg[j]) {
          await swap(heg,j - 1, j);
        }
      }
    }
    console.log(",,,,,");
    setHeights(heg);
    setSorted(true);
  };

  const handleSort = (e) => {
    e.preventDefault();
    if (sorted) return;
    setSorted(true);
    setAhead(true);
    const option = document.getElementById('list').value;
    if (option === 'bubble') {
      console.log("sorting")
      bubbleSort();
    } 
  };

  const handleShuffle = async(e) => {
    e.preventDefault();
    console.log("shuffle")
    if (!sorted) return;
    setSorted(false);
    setAhead(false);
    makeBars();
    setRandomBars();
  };

  return (
    <div>
      <div id="header">
        <h2>Sorting Algo Visualizer</h2>
      </div>

      <div id="sorting-panel" className="d-flex justify-content-center">
        <div id="sort-container">
          {heights.map((height, index) => (
            <div className="bar" key={index} style={{ height: `${height}px` }}></div>
          ))}
        </div>
      </div>

      <div id="bottom-panel">
        <form>
          <div className="form-row justify-content-center m-0 mt-4">
            <div className="form-group d-flex">
              <h5 id="label">Choose Your Sort!</h5>
              <select name="" id="list" className="form-control">
                <option value="bubble">Bubble Sort</option>
                {/* Add other sorting options */}
              </select>
            </div>
            <button className="btn btn-success" onClick={(e)=>handleSort(e)}>Sort</button>
            <button className="btn btn-danger" onClick={(e)=>handleShuffle(e)}>Shuffle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SortVisualizer;
