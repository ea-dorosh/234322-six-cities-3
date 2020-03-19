import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";
// import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer/reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/offer/:id">
            <DetailInfo/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   cities: PropTypes.array.isRequired,
//   activeCity: PropTypes.shape({
//     location: PropTypes.shape({
//       latitude: PropTypes.number.isRequired,
//       longitude: PropTypes.number.isRequired,
//       zoom: PropTypes.number.isRequired
//     }),
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   offers: PropTypes.array.isRequired,
//   handleCityClick: PropTypes.func.isRequired,
//   handleOffersSort: PropTypes.func.isRequired,
//   sortType: PropTypes.string.isRequired,
// };
//
// const mapStateToProps = (state) => {
//   return {
//     cities: state.cities,
//     activeCity: state.activeCity,
//     offers: state.offers,
//     sortType: state.sortType,
//     marker: state.marker
//   };
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   handleCityClick(activeCity) {
//     dispatch(ActionCreator.changeCity(activeCity));
//     dispatch(ActionCreator.getOffers(activeCity.name));
//   },
//
//   handleOffersSort(sortType) {
//     dispatch(ActionCreator.sortOffers(sortType));
//   },
//
//   handleOfferHover(offer) {
//     dispatch(ActionCreator.highlightMarker(offer));
//   },
// });

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
