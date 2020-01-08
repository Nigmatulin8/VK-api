import { combineReducers } from "redux";

import { userReducer } from './user/reducers.js';
import { navReducer } from './nav/reducers.js';

export default combineReducers({
    user: userReducer,
    nav: navReducer,
});
