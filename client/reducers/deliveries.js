import { RECEIVE_DELIVERIES, REQUEST_DELIVERIES } from '../actions/index.js';

export const deliveries = (state = {deliveries: [], status: null}, action) => {
  console.log("IN DELIVERIES");
  switch(action.type) {
    case RECEIVE_DELIVERIES:
      console.log("IN REDUCER");
      return Object.assign({}, state, {
        deliveries: action.deliveries,
        status: action.status,
      });
    // TODO: Clean this up with correct switch syntax
    case REQUEST_DELIVERIES:
      return Object.assign({}, state, {
        status: action.status,
      });
      return state;
    default:
      return state;
  }
}
