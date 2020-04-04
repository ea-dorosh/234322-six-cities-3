import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FavoritesOfferItem from "../favorites-offer-item/favorites-offer-item.jsx";


class FavoritesCityItem extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {city, offers} = this.props;

    const cityOffers = offers.filter((offer) => offer.city.name === city.name);

    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city.name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {cityOffers.map((offer) => (
            <FavoritesOfferItem
              key={offer.id}
              offer={offer}
            />
          ))}
        </div>
      </li>
    );
  }
}

FavoritesCityItem.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.object.isRequired
};

export default FavoritesCityItem;
