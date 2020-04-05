import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSendingStatus} from "../../reducer/review/selectors.js";
import {Operation as ReviewOperation, ActionCreator, LoadingStatus} from "../../reducer/review/review.js";

const RatingValues = [5, 4, 3, 2, 1];

const TextRating = new Map([
  [1, `terribly`],
  [2, `badly`],
  [3, `not bad`],
  [4, `good`],
  [5, `perfect`]
]);


export class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      comment: ``,
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingHandle = this.ratingHandle.bind(this);
    this.reviewHandle = this.reviewHandle.bind(this);
  }

  reviewHandle(evt) {
    this.setState({
      comment: evt.target.value
    }
    );

  }

  ratingHandle(evt) {
    this.setState({
      rating: evt.target.value
    }
    );
  }

  handleSubmit(evt) {
    const {onReviewSubmit, id} = this.props;
    evt.preventDefault();

    onReviewSubmit(this.state, id);
  }

  componentDidUpdate() {
    const {loadingStatus, onLoadingStatusClear} = this.props;

    if (loadingStatus === LoadingStatus.SUCCESS) {
      onLoadingStatusClear();
    }
  }

  render() {
    const {loadingStatus} = this.props;

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
                disabled={loadingStatus === LoadingStatus.DISABLED}
                onChange={this.ratingHandle}
                checked={loadingStatus === LoadingStatus.SUCCESS ? false : null}
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
          minLength={50}
          maxLength={300}
          disabled={loadingStatus === LoadingStatus.DISABLED}
          onChange={this.reviewHandle}
          value={loadingStatus === LoadingStatus.SUCCESS ? `` : undefined}
        />
        {loadingStatus === LoadingStatus.FAILED ? <p style={{background: `red`}}>PLEASE TRY AGAIN</p> : null}
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!(this.state.comment.length > 50 && this.state.comment.length < 300 && this.state.rating)}
          >
            Submit</button>
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  loadingStatus: PropTypes.string.isRequired,
  onLoadingStatusClear: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {

  return {
    loadingStatus: getSendingStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  onReviewSubmit(reviewData, id) {
    dispatch(ReviewOperation.postReview(reviewData, id));
  },

  onLoadingStatusClear() {
    dispatch(ActionCreator.changeLoadingStatus(``));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
