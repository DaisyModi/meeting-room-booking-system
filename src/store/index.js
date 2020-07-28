import { createStore, combineReducers, applyMiddleware } from 'redux';
import roomReducer from '../meeting/reducers';
import bookingReducer from '../bookings/reducers';
import layoutReducer from '../roomLayout/reducers';
import equipmentReducer from '../equipments/reducers';
import foodReducer from '../foodDrinks/reducers';
import foodItemReducer from '../AddFoodItem/reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';


var rootReducer = combineReducers({
	roomData : roomReducer,
	bookingData : bookingReducer,
	layoutData: layoutReducer,
	equipmentData: equipmentReducer,
	foodData : foodReducer,
	foodItemData : foodItemReducer
	// foodData : foodReducer
});

var appStore =  createStore(rootReducer, applyMiddleware(thunk, logger));

export default appStore;

