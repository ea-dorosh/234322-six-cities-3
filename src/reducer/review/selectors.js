import NameSpace from '../name-space.js';

export const getLoadingStatus = (state) => state[NameSpace.REVIEW].loadingStatus;

export const getReviews = (state) => state[NameSpace.REVIEW].offerReviews;
