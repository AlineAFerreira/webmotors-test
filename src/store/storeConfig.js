import { createStore, combineReducers } from 'redux';
import cars from './reducers/cars';

const reducers = combineReducers({
    cars 
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;