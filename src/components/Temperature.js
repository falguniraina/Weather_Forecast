import React from 'react';

const Temperature = ({ temp, unit }) => {
  return (
    <div className="temperature-display">
      <h2>{temp.toFixed(1)} °{unit}</h2>
    </div>
  );
};

export default Temperature;
