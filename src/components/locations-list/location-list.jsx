import React from 'react';
import PropTypes from 'prop-types';

const LocationsList = (props) => {
  const {cities, activeCity, handleCityClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <li key={i} className="locations__item">
          <a className={`locations__item-link tabs__item ${activeCity.name === city.name ? ` tabs__item--active` : ``}`}
            onClick={() => handleCityClick(city)}
            href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

export default LocationsList;
