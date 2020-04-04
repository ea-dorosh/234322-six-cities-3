import {combineReducers} from "redux";
import {reducer as offers} from "./offers/offers.js";
import {reducer as main} from "./main/main.js";
import {reducer as user} from "./user/user.js";
import {reducer as review} from "./review/review.js";
import {reducer as favorite} from "./favorites/favorites.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.MAIN]: main,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review,
  [NameSpace.FAVORITE]: favorite,
});
