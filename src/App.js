import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ListComponent from './components/ListComponent';
import ResultComponent from './components/ResultComponent';


const App = () => {
  const [selectedState, setSelectedState] = useState();
  const [stateName, setStateName] = useState()
  const [cities, setCities] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListComponent setSelectedState={setSelectedState} selectedState={selectedState} setCities={setCities} cities={cities} setStateName={setStateName} />} />
        <Route path="/result" element={<ResultComponent cities={cities} stateName={stateName} />} />
      </Routes>
    </Router>

  );
};

export default App;
