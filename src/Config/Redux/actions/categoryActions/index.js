import { GET_CATEGORY, ADD_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR } from '../types';

const addCategory = data => ({
    type: ADD_CATEGORY,
    payload: data,
});
const getCategory = (param = {}, reset = false) => ({
    type: GET_CATEGORY,
    payload: { param, reset }
});
const getCategorySuccess = data => ({
    type: GET_CATEGORY_SUCCESS,
    payload: data,
});
const getCategoryError = data => ({
    type: GET_CATEGORY_ERROR,
    payload: data,
});


export {
    addCategory,
    getCategory,
    getCategorySuccess,
    getCategoryError,
};
