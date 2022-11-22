import isLogged from './isLogged';
import openAddTax from './isTax';
import { combineReducers } from 'redux';
import spinnerStatus from './spinner';


const rootReducer = combineReducers({

    LoginReducer: isLogged,
    TaxReducer: openAddTax,
    loading: spinnerStatus


})

export default rootReducer