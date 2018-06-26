import { EDIT_TODO } from '../constants/ActionTypes'

const initialState = {
	head: '',
	body: ''
};

const temp = (state = initialState, action) => {
	switch (action.type) {
		case EDIT_TODO:
      return action.payload
		default:
			return state
  }
}

export default temp
