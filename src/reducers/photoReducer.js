import { FETCH_PHOTOS } from "../actions/types";
const initialState = {
  items: [],
  item: {},
  pageNumber: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
