import {extend} from '../../utils.js';

const LoadingStatus = {
  PROCESSING: `PROCESSING`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`,
};

const initialState = {
  favoriteStatus: ``,
};

const ActionType = {
  CHANGE_ADD_STATUS: `CHANGE_ADD_STATUS`,
};

const ActionCreator = {
  changeAddStatus: (status) => ({
    type: ActionType.CHANGE_ADD_STATUS,
    payload: status
  }),

};

const Operation = {
  addToFavorite: (status, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeAddStatus(LoadingStatus.PROCESSING));
    return api.post(`/favorite/${id}/${status}`)
      .then(() => {
        dispatch(ActionCreator.changeAddStatus(LoadingStatus.SUCCESS));
      })
      .catch((err) => {
        dispatch(ActionCreator.changeAddStatus(LoadingStatus.FAILED));
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ADD_STATUS:
      return extend(state, {
        favoriteStatus: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, LoadingStatus, Operation};
