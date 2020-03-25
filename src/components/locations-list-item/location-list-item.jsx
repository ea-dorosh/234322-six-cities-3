import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import {ActionCreator} from "../../reducer/offers/offers.js";
import {connect} from "react-redux";
import {getActiveCity} from "../../reducer/offers/selectors";

class LocationsListItem extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCityClick = this._handleCityClick.bind(this);
  }


  _handleCityClick() {
    // eslint-disable-next-line react/prop-types
    this.props.handleCityClick(this.props.city);
  }

  render() {
    // eslint-disable-next-line react/prop-types,no-unused-vars
    const {city, activeCity} = this.props;

    return (
      <li className="locations__item">
        {/* eslint-disable-next-line react/prop-types */}
        <a className={`locations__item-link tabs__item ${activeCity.name === city.name ? ` tabs__item--active` : ``}`}
          onClick={this._handleCityClick}
          href="#">
          {/* eslint-disable-next-line react/prop-types */}
          <span>{city.name}</span>
        </a>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: getActiveCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  handleCityClick(activeCity) {
    dispatch(ActionCreator.changeCity(activeCity));
    dispatch(ActionCreator.getOffers(activeCity.name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsListItem);

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
