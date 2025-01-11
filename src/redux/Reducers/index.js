// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Import your cartReducer
// Import other reducers if you have them

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add other reducers here
});

export default rootReducer;
