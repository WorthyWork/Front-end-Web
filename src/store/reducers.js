import {
  SET_LOADING
} from "../actions/types";

let initialState = {
  loading: false,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default reducer ;
