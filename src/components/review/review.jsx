import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {ratingToStar} from "../../utils.js";


class Review extends PureComponent {
  constructor(props) {
    super(props);

  }

  dateStamp(date) {
    const dateObj = new Date(date);

    const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

    return `${MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  }

  render() {
    // eslint-disable-next-line no-unused-vars,react/prop-types
    const {rating, name, comment, date, id, user} = this.props.review;

    // eslint-disable-next-line react/prop-types
    const ratingReview = ratingToStar(rating);

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            {/* eslint-disable-next-line react/prop-types */}
            <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
              alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {/* eslint-disable-next-line react/prop-types */}
            {user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: ratingReview + `%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime={date}>{this.dateStamp(date)}</time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  review: PropTypes.shape(
      {
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }
  )
};


export default Review;

