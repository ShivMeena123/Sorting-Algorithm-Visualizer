// Bar.js
import React from 'react';

function Bar({ height }) {
  return <div className="bar" style={{ height: `${height}px` }}></div>;
}

export default Bar;
