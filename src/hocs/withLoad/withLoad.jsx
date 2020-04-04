import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {LoadingOfferStatus} from "../../reducer/offers/offers";

const withLoad = (Component, loadSelector, errorSelector) => connect((state) => ({
  loadingOfferStatus: loadSelector(state),
  error: errorSelector(state),
}))(
    class WithLoad extends PureComponent {
      constructor(props) {
        super(props);

      }

      render() {

        // eslint-disable-next-line react/prop-types
        const {loadingOfferStatus, error} = this.props;

        return (
        <>
          {loadingOfferStatus === LoadingOfferStatus.PROCESSING && <div style={{fontSize: 60 + `px`}}><p>Connection...</p></div>}
          {/* eslint-disable-next-line react/prop-types */}
          {error && <div style={{fontSize: 60 + `px`, color: `red`}}><p>Connection... FAIL {error.status}</p></div>}
          {loadingOfferStatus === LoadingOfferStatus.SUCCESS && <Component {...this.props}/>}
        </>
        );
      }
    }
);

export default withLoad;

