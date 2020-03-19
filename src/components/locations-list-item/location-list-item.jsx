import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import {ActionCreator} from "../../reducer/reducer";
import {connect} from "react-redux";

class LocationsListItem extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {city, activeCity, handleCityClick} = this.props;

    return (
      <li className="locations__item">
        {/* eslint-disable-next-line react/prop-types */}
        <a className={`locations__item-link tabs__item ${activeCity.name === city.name ? ` tabs__item--active` : ``}`}
          onClick={() => handleCityClick(city)}
          href="#">
          {/* eslint-disable-next-line react/prop-types */}
          <span>{city.name}</span>
        </a>
      </li>
    );
  }
}


// LocationsListItem.propTypes = {
//   // cities: PropTypes.array.isRequired,
//   // activeCity: PropTypes.shape({
//   //   location: PropTypes.shape({
//   //     latitude: PropTypes.number.isRequired,
//   //     longitude: PropTypes.number.isRequired,
//   //     zoom: PropTypes.number.isRequired
//   //   }),
//   //   name: PropTypes.string.isRequired,
//   // }).isRequired,
//   // handleCityClick: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity,
  };
};

const mapDispatchToProps = (dispatch) => ({

  handleCityClick(activeCity) {
    dispatch(ActionCreator.changeCity(activeCity));
    dispatch(ActionCreator.getOffers(activeCity.name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsListItem);
