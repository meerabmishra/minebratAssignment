import React, { useState, useEffect } from 'react';

const CitiesListComponent = ({ selectedState, setCities, cities }) => {
    //   const [cities, setCities] = useState([]);
    const [stateCities, setStateCities] = useState([])

    useEffect(() => {
        if (selectedState) {
            // Fetch the list of cities for the selected state from the API
            fetch(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
                .then(response => response.json())
                .then(data => {
                    setStateCities(data)
                })
        }
    }, [selectedState]);

    const handleCityChange = (event) => {
        setCities(event.target.value);
    }

    return (
        <div>
            <select value={cities} onChange={handleCityChange}>
                <option value="">Select a city</option>
                {stateCities.map(city => (
                    <option key={city.id} value={city.cityName}>{city.cityName}</option>
                ))}
            </select>
        </div>
    );
};

export default CitiesListComponent;
