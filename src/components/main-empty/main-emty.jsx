import React from "react";
import PropTypes from "prop-types";


const MainEmpty = (props) => {
  const {activeCity} = props;

  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in
              {activeCity.name}</p>
          </div>
        </section>
        <div className="cities__right-section"/>
      </div>
    </div>
  );
};

MainEmpty.propTypes = {
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    name: PropTypes.string,
  }).isRequired,
};

export default MainEmpty;
