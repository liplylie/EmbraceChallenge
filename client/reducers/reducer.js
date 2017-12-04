import { combineReducers } from 'redux'
import addDog from './addDogReducer'
import clickDog from './clickDogReducer'

const reducer = combineReducers({
	addDog,
	clickDog
});

export default reducer;