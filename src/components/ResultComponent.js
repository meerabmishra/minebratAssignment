import React from 'react';


const ResultComponent = ({ cities, stateName }) => {
  return (
    <div>
      <h1>You Have selected, {cities} {stateName} </h1>
    </div>
  );
};

export default ResultComponent;
