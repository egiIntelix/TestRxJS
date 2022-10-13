import { of, withLatestFrom } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, mergeMap, catchError } from "rxjs/operators";
import { GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, ADD_CATEGORY } from '../../actions/types';
import { addCategory, getCategorySuccess } from '../../actions';
import { POST } from '../../../../Utils';

const initialState = {
    param: {},
    value: [],
    reset: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return { ...state, ...{ value: action.payload } };
        case ADD_CATEGORY:
            return { ...state, ...{ value: [...state.value, ...action.payload] } };
        case GET_CATEGORY_ERROR:
            return { ...state, ...{ value: [] } };
        case GET_CATEGORY:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export const categoryEpic = (action$, state$) =>
    action$.pipe(
        ofType(GET_CATEGORY),
        withLatestFrom(state$),
        mergeMap(([action, { category: { param } }]) => new Promise((resolve, reject) =>
            POST('category', { ...param })
                .then(response => resolve(response.data || []))
                .catch(err => reject(err))
        )),
        map((item) => state$.value.category.reset ? getCategorySuccess(item) : addCategory(item)),
        catchError(error => of({
            type: GET_CATEGORY_ERROR,
            payload: error,
            error: true
        }))
    );