import {extend} from '../../utils.js';

const LoadingStatus = {
  DISABLED: `DISABLED`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`,
};

const initialState = {
  loadingStatus: ``
};

const ActionType = {
  CHANGE_LOADING_STATUS: `CHANGE_LOADING_STATUS`
};

const ActionCreator = {
  changeLoadingStatus: (status) => ({
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: status
  }),
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
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOADING_STATUS:
      return extend(state, {
        loadingStatus: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, LoadingStatus};
