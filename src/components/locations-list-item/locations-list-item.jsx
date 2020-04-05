import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from "../../reducer/offers/offers.js";
import {connect} from "react-redux";
import {getActiveCity} from "../../reducer/offers/selectors";

export class LocationsListItem extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCityClick = this._handleCityClick.bind(this);
  }


  _handleCityClick() {
    this.props.handleCityClick(this.props.city);
  }

  render() {
    const {city, activeCity} = this.props;

    return (
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${activeCity.name === city.name ? ` tabs__item--active` : ``}`}
          onClick={this._handleCityClick}
          href="#">
          <span>{city.name}</span>
        </a>
      </li>
    );
  }
}

LocationsListItem.propTypes = {
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string,
  }).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string,
  }).isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeCity: getActiveCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  handleCityClick(activeCity) {
    dispatch(ActionCreator.changeCity(activeCity));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsListItem);
