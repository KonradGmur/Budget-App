import {
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
} from 'data/constants';

const fetchBudget = () => (dispatch) {
    dispatch({
        type: BUDGET_GET_REQUEST
    })
    const response = fetch('localhost:3001/');
}

const fetchBudgetedCategories = () => {

}