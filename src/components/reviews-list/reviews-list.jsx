import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";


const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((it) => (
        <Review
          key={it.id}
          review={it}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(
          {
            rating: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }
      )
  ),
};


export default ReviewsList;

