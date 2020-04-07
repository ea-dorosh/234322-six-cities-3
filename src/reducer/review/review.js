import {extend, prepareReview} from '../../utils.js';

const LoadingStatus = {
  PROCESSING: `PROCESSING`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`,
};

const initialState = {
  loadingStatus: LoadingStatus.SUCCESS,
  sendStatus: ``,
  offerReviews: [],
};

const ActionType = {
  CHANGE_LOADING_STATUS: `CHANGE_LOADING_STATUS`,
  CHANGE_SENDING_STATUS: `CHANGE_SENDING_STATUS`,
  GET_OFFER_REVIEWS: `GET_OFFER_REVIEWS`,
};

const ActionCreator = {
  changeLoadingStatus: (status) => ({
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: status
  }),
  changeSendingStatus: (status) => ({
    type: ActionType.CHANGE_SENDING_STATUS,
    payload: status
  }),
  getOfferReviews: (data) => ({
    type: ActionType.GET_OFFER_REVIEWS,
    payload: (data)
  })
};

export const Operation = {
  postReview: (reviewData, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeSendingStatus(LoadingStatus.PROCESSING));
    return api.post(`/comments/${id}`, reviewData)
      .then(() => {
        dispatch(ActionCreator.changeSendingStatus(LoadingStatus.SUCCESS));
        dispatch(Operation.getReviews(id));
      })
      .catch(() => {
        dispatch(ActionCreator.changeSendingStatus(LoadingStatus.FAILED));
      });
  },
  getReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.PROCESSING));
    return api.get(`/comments/${id}`)
      .then((response) => {
        const reviewsData = prepareReview(response.data);
        dispatch(ActionCreator.getOfferReviews(reviewsData));
      })
      .catch(() => {
        dispatch(ActionCreator.changeLoadingStatus(LoadingStatus.FAILED));
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
        offerReviews: action.payload,
        loadingStatus: LoadingStatus.SUCCESS,
      });

    case ActionType.CHANGE_SENDING_STATUS:
      return extend(state, {
        sendStatus: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, LoadingStatus};
