import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import thunk from 'redux-thunk';

import {
    categoryReducers as category,
    categoryEpic,
} from '../reducers';

const rootReducer = combineReducers({
    category: category,
});

const rootEpic = combineEpics(
    categoryEpic,
)


const epicMiddleware = createEpicMiddleware();
export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}