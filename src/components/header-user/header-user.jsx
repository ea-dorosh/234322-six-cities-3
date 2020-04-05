import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {getAuthorizationStatus, getUserProperties} from "../../reducer/user/selectors";
import {AppRoute} from "../../utils.js";


export class HeaderUser extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
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
                {userProperties ? userProperties.email : null}
              </span>
            </Link>
          }
        </li>
      </ul>
    );
  }
}

HeaderUser.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userProperties: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    userProperties: getUserProperties(state),
  };
};

export default connect(mapStateToProps)(HeaderUser);

