import { createStore, combineReducers, applyMiddleware } from 'redux';
import cars from './reducers/cars';
import thunk from 'redux-thunk'

const reducers = combineReducers({
    cars 
});

function storeConfig() {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig;