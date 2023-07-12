import React, { useState, useEffect } from 'react';
import CitiesListComponent from './CitiesListComponent';
import { Link, useNavigate } from 'react-router-dom';

const ListComponent = ({ setSelectedState, selectedState, setCities, cities, setStateName }) => {
    const [states, setStates] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch the list of states from the API
        fetch('http://api.minebrat.com/api/v1/states')
            .then(response => response.json())
            .then(data => setStates(data));
    }, []);

    const handleStateChange = (event) => {
        const filterStates = states.filter(item => item.stateId === event.target.value);

        setStateName(filterStates[0].stateName)
        setSelectedState(event.target.value);
    }

    return (
        <div>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select a state</option>
                {states.map(state => {
                    return <option key={state.id} value={state.stateId}>{state.stateName}</option>
                }
                )}
            </select>
            <CitiesListComponent selectedState={selectedState} cities={cities} setCities={setCities} />
            <button onClick={() => navigate("/result")}>Submit</button>
        </div>
    );
};

export default ListComponent;
