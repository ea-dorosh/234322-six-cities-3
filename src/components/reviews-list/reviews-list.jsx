import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";


const ReviewsList = (props) => {
  const {reviews} = props;

  reviews.sort(function (a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        index < 10 ?
          <Review
            key={review.id}
            review={review}
          />
          :
          null
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(
          {
            rating: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            user: PropTypes.shape(
                {
                  avatarUrl: PropTypes.string.isRequired,
                  id: PropTypes.number.isRequired,
                  isPro: PropTypes.bool.isRequired,
                  name: PropTypes.string.isRequired,
                })
          }
      )
  ),
};


export default ReviewsList;

