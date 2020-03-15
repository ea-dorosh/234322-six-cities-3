import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";


class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  _handleCardHover(activeOffer) {
    this.setState({
      activeOffer
    });
  }

  render() {
    const {offers, listClass, activeCity} = this.props;

    return (
      <div className={`${listClass === `cities` ? `cities__places-list tabs__content` : `near-places__list`} places__list`}>
        {offers.map((it, index) => (
          <PlaceCard
            key={index}
            offer={it}
            handleCardHover={this._handleCardHover}
            otherOffers={offers}
            cardClass={listClass}
            activeCity={activeCity}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  listClass: PropTypes.string,
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaceCardList;
