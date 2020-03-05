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
    const {offers, onPlaceNameHeaderClick, listClass} = this.props;

    return (
      <div className={`${listClass === `cities` ? `cities__places-list tabs__content` : `near-places__list`} places__list`}>
        {offers.map((it, index) => (
          <PlaceCard
            key={index}
            offer={it}
            onPlaceNameHeaderClick={onPlaceNameHeaderClick}
            handleCardHover={this._handleCardHover}
            otherOffers={offers}
            cardClass={listClass}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  onPlaceNameHeaderClick: PropTypes.func,
  listClass: PropTypes.string,
};

export default PlaceCardList;
