import React from 'react';
import PropTypes from 'prop-types';
import LocationsListItem from "../locations-list-item/locations-list-item.jsx";
import {connect} from "react-redux";
import {getCitiesList} from "../../reducer/offers/selectors";

export const LocationsList = (props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => (
        <LocationsListItem
          key={index}
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
    cities: getCitiesList(state),
  };
};


export default connect(mapStateToProps)(LocationsList);
