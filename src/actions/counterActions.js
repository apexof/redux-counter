import actionTypes from '../constants/actionTypes';

const {INCREMENT, DECREMENT, RESET} = actionTypes;

export const increment = (amount) => ({type: INCREMENT, amount});
export const decrement = (amount) => ({type: DECREMENT, amount});
export const reset = () => ({type: RESET});