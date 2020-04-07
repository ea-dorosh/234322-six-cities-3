import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSendingStatus} from "../../reducer/review/selectors.js";
import {ActionCreator, LoadingStatus, Operation as ReviewOperation} from "../../reducer/review/review.js";
import CommentFormField from "../comment-form-field/comment-form-field.jsx";
import withForm from "../../hocs/withForm/withForm.jsx";


export class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onReviewSubmit, id, values} = this.props;

    evt.preventDefault();

    onReviewSubmit(values, id);
  }

  componentDidUpdate(prevProps) {
    const {loadingStatus, onReset} = this.props;
    if (loadingStatus === LoadingStatus.SUCCESS && prevProps.loadingStatus === LoadingStatus.PROCESSING) {
      onReset();
    }
  }

  render() {
    const {loadingStatus, onChange, values} = this.props;

    const error = loadingStatus === LoadingStatus.FAILED;
    const disabled = loadingStatus === LoadingStatus.PROCESSING;
    const submitDisabled = !(values.comment && values.comment.length > 50 && values.comment.length < 300 && values.rating);

    return (
      <CommentFormField
        onChange={onChange}
        onSubmit={this.handleSubmit}
        disabled={disabled}
        error={error}
        values={values}
        submitDisabled={submitDisabled}
      />
    );
  }
}

CommentForm.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.object,
  onReset: PropTypes.func,
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
    dispatch(ActionCreator.changeSendingStatus(``));
  },
});


export default withForm(connect(mapStateToProps, mapDispatchToProps)(CommentForm));

