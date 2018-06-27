import {SHOW_MODAL, HIDE_MODAL} from "../constants/ToggleModal";

const initialState = {
  isOpen: false
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: action.isOpen
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: action.isOpen
      };
    default:
      return state;
  }
};

export default modal;
