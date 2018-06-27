import {EDIT_TODO, CLEAR} from "../constants/ActionTypes";

const initialState = {
  id: null,
  head: "",
  body: ""
};

const temp = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TODO:
      return {
        id: action.id,
        head: action.head,
        body: action.body
      };
    case CLEAR:
      return {
        id: null,
        head: "",
        body: ""
      };
    default:
      return state;
  }
};

export default temp;
