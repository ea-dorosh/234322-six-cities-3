import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const RATING_VALUES = [5, 4, 3, 2, 1];

const TextRating = new Map([
  [1, `terribly`],
  [2, `badly`],
  [3, `not bad`],
  [4, `good`],
  [5, `perfect`]
]);

const RATING_FIELD_NAME = `rating`;
const COMMENT_FIELD_NAME = `comment`;

class CommentFormField extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
  }

  handleChangeRating(evt) {
    this.props.onChange(RATING_FIELD_NAME, evt.target.value);
  }


  handleChangeComment(evt) {
    this.props.onChange(COMMENT_FIELD_NAME, evt.target.value);
  }

  render() {
    const {onSubmit, values, error, disabled, submitDisabled} = this.props;

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={onSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RATING_VALUES.map((ratingValue) => (
            <React.Fragment key={ratingValue}>
              <input
                className="form__rating-input visually-hidden"
                name={RATING_FIELD_NAME}
                value={ratingValue}
                id={`${ratingValue}-stars`}
                type="radio"
                disabled={disabled}
                checked={Number(values.rating) === ratingValue ? true : undefined}
                onChange={this.handleChangeRating}
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
          name={COMMENT_FIELD_NAME}
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength={50}
          maxLength={300}
          disabled={disabled}
          value={values.comment}
          onChange={this.handleChangeComment}
        />
        {error ? <p style={{background: `red`}}>PLEASE TRY AGAIN</p> : null}
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe
            your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={submitDisabled}
          >
            Submit</button>
        </div>
      </form>
    );
  }
}

CommentFormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
};

export default CommentFormField;
