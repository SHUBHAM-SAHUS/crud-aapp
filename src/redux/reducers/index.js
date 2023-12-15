
import { combineReducers } from 'redux';
import productReducer from '../productslice';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
