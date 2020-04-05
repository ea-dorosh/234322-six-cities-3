import NameSpace from '../name-space.js';

export const getSendingStatus = (state) => state[NameSpace.REVIEW].sendStatus;

export const getReviews = (state) => state[NameSpace.REVIEW].offerReviews;

