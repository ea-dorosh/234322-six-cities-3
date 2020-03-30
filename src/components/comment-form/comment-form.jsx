import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {getLoadingStatus} from "../../reducer/review/selectors.js";
import {Operation as ReviewOperation} from "../../reducer/review/review.js";

const RatingValues = [5, 4, 3, 2, 1];

const TextRating = new Map([
  [1, `terribly`],
  [2, `badly`],
  [3, `not bad`],
  [4, `good`],
  [5, `perfect`]
]);


class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviewMark: null,
      reviewText: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingHandle = this.ratingHandle.bind(this);
    this.reviewHandle = this.reviewHandle.bind(this);
  }

  reviewHandle(evt) {
    this.setState({
      reviewText: evt.target.value
    }
    );
  }

  ratingHandle(evt) {
    this.setState({
      reviewMark: evt.target.value
    }
    );
  }

  handleSubmit(evt) {
    // eslint-disable-next-line react/prop-types
    const {onReviewSubmit, id} = this.props;

    evt.preventDefault();

    onReviewSubmit(this.state, id);
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}
        onChange={this.target}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RatingValues.map((ratingValue) => (
            <React.Fragment key={ratingValue}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingValue}
                id={`${ratingValue}-stars`}
                type="radio"
                onChange={this.ratingHandle}
              />
              <label
                htmlFor={`${ratingValue}-stars`}
                className="reviews__rating-label form__rating-label"
                title={TextRating.get(ratingValue)}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this.reviewHandle}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state) => {

  return {
    loadingStatus: getLoadingStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  onReviewSubmit(reviewData, id) {
    dispatch(ReviewOperation.postReview(reviewData, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
