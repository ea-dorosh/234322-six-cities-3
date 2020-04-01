import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AppRoute} from "../../utils.js";


class HeaderUser extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {

    // eslint-disable-next-line react/prop-types
    const {authorizationStatus, userProperties} = this.props;

    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authorizationStatus === AuthorizationStatus.NO_AUTH ?
            <Link
              to={AppRoute.LOGIN}
              className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Sign in</span>
            </Link>
            :
            <Link
              to={AppRoute.FAVORITE}
              className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">
                {/* eslint-disable-next-line react/prop-types */}
                {userProperties.email}
              </span>
            </Link>
          }
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    userProperties: state.USER.userProperties,
  };
};

export default connect(mapStateToProps)(HeaderUser);

