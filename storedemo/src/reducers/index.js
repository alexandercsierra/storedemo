import {cartReducer} from './cartReducer'
import {storeReducer} from './storeReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    cartReducer,
    storeReducer
});