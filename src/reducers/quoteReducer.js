import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE
} from "../actions";

const initialState = {
  quote: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;