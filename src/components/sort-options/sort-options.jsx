import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortType} from "../../utils.js";

class SortOptions extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this._handleSortTypeClick = this._handleSortTypeClick.bind(this);
  }

  _handleSortTypeClick() {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }

  render() {

    const {handleOffersSort, sortType} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={() => {
            this._handleSortTypeClick();
          }}>
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpened ? `places__options--opened` : null}`}>
          {Object.values(SortType).map((item, i) => (
            <li key={i} onClick={() => {
              handleOffersSort(item);
              this._handleSortTypeClick();
            }}
            className={`places__option ${item === sortType ? `places__option--active` : ``}`}
            tabIndex="0">
              {item}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

SortOptions.propTypes = {
  handleOffersSort: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

export default SortOptions;
