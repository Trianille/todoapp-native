import * as types from '../constants/ActionTypes'
import * as modal from '../constants/ToggleModal'

let nextTodoId = 0;

export const addTodo = (head, body, importance, timeStarts, timeEnds) => ({
	type: types.ADD_TODO,
	id: nextTodoId++,
	head,
	body,
	importance,
	timed: false,
	timeStarts,
	timeEnds,
	expired: false,
	completed: false
})

export const editTodo = todo => ({
	type: types.EDIT_TODO,
	payload: {head: todo.head, body: todo.body, importance: todo.importance}
})

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id
})

export const setVisibilityFilter = filter => ({
	type: types.SET_VISIBILITY_FILTER,
	filter
})

export const completeTodo = id => ({
	type: types.COMPLETE_TODO,
	id
})

export const expiredTodo = id => ({
	type: types.EXPIRED_TODO,
	id
})

export const showModal = () => ({
	type: modal.SHOW_MODAL,
	isOpen: true
})

export const hideModal = () => ({
	type: modal.HIDE_MODAL,
	isOpen: false
})
