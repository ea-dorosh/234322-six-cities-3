import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";


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
              to={`/dev-auth`}
              className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Sign in</span>
            </Link>
            :
            <a
              className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">
                {/* eslint-disable-next-line react/prop-types */}
                {userProperties.email}
              </span>
            </a>
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

