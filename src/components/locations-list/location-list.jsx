import React from 'react';
import PropTypes from 'prop-types';
import LocationsListItem from "../locations-list-item/location-list-item.jsx";
import {connect} from "react-redux";

const LocationsList = (props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationsListItem
          key={city.name}
          city={city}
        />
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};


export default connect(mapStateToProps)(LocationsList);
