import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SortOptions extends PureComponent {
  constructor(props) {
    super(props);

  }


  render() {

    const {handleOffersSort, sortType} = this.props;


    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        {/* <span className="places__sorting-type" tabIndex="0">*/}
        {/*          Popular*/}
        {/*  <svg className="places__sorting-arrow" width="7" height="4">*/}
        {/*    <use xlinkHref="#icon-arrow-select"/>*/}
        {/*  </svg>*/}
        {/* </span>*/}
        {/* <ul className="places__options places__options--custom places__options--opened">*/}
        {/*  <li className="places__option places__option--active" tabIndex="0">Popular</li>*/}
        {/*  <li className="places__option" tabIndex="0">Price: low to high</li>*/}
        {/*  <li className="places__option" tabIndex="0">Price: high to low</li>*/}
        {/*  <li className="places__option" tabIndex="0">Top rated first</li>*/}
        {/* </ul>*/}

        <select className="places__sorting-type" id="places-sorting"
          onChange={(evt) => {
            handleOffersSort(evt.target.value);
          }} value={sortType}>
          <option className="places__option" value="popular">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select>

      </form>
    );
  }
}

SortOptions.propTypes = {

};

export default SortOptions;
