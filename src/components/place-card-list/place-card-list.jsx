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
    const {offers, onPlaceNameHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it, index) => (
          <PlaceCard
            key={index}
            offer={it}
            onPlaceNameHeaderClick={onPlaceNameHeaderClick}
            handleCardHover={this._handleCardHover}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  onPlaceNameHeaderClick: PropTypes.func.isRequired,
};

export default PlaceCardList;
