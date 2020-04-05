import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import withLoad from "../../hocs/withLoad/withLoad.jsx";
import {connect} from "react-redux";
import {getReviews, getLoadingStatus, getError} from "../../reducer/review/selectors";
import {Operation as ReviewOperation} from "../../reducer/review/review";


export class ReviewsList extends PureComponent {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {id, downloadReviews} = this.props;
    downloadReviews(id);
  }

  render() {


    const {reviews} = this.props;

    reviews.sort(function (a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB - dateA;
    });

    return (
      <>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">
          {reviews ? reviews.length : null}
        </span></h2>
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
      </>
    );
  }
}

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

const mapStateToProps = (state) => {

  return {
    reviews: getReviews(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  downloadReviews(id) {
    dispatch(ReviewOperation.getReviews(id));
  },
});


export default withLoad(connect(mapStateToProps, mapDispatchToProps)(ReviewsList), getLoadingStatus, getError);
