import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.MAIN;

export const getMarker = (state) => {
  return state[NAME_SPACE].marker;
};

export const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};
