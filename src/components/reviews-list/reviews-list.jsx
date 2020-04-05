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
            comment: PropTypes.string,
            date: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            user: PropTypes.shape(
                {
                  avatarUrl: PropTypes.string,
                  id: PropTypes.number,
                  isPro: PropTypes.bool,
                  name: PropTypes.string,
                })
          }
      )
  ),
};


export default ReviewsList;

