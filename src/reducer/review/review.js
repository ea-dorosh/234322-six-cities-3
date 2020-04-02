import {extend} from '../../utils.js';
import {prepareReview} from "../../utils";

const LoadingStatus = {
  DISABLED: `DISABLED`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`,
};

const initialState = {
  loadingStatus: ``,
  offerReviews: [],
};

const ActionType = {
  CHANGE_LOADING_STATUS: `CHANGE_LOADING_STATUS`,
  GET_OFFER_REVIEWS: `GET_OFFER_REVIEWS`,
};

const ActionCreator = {
  changeLoadingStatus: (status) => ({
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: status
  }),
  getOfferReviews: (data) => ({
    type: ActionType.GET_OFFER_REVIEWS,
    payload: (data)
  })
};

export const Operation = {
  postReview: (reviewData, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.DISABLED));
    return api.post(`/comments/${id}`, reviewData)
      .then(() => {
        dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.SUCCESS));
      })
      .catch((err) => {
        dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.FAILED));
        throw err;
      });
  },
  getReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const reviewsData = prepareReview(response.data);
        dispatch(ActionCreator.getOfferReviews(reviewsData));
      })
      .catch((err) => {
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOADING_STATUS:
      return extend(state, {
        loadingStatus: action.payload
      });

    case ActionType.GET_OFFER_REVIEWS:
      return extend(state, {
        offerReviews: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, LoadingStatus};
