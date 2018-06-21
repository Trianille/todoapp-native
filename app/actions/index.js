let nextTodoId = 0;

export const addTodo = (head, body, importance, timeStarts, timeEnds) => ({
	type: 'ADD_TODO',
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

export const editTodo = (todo) => ({
	type: 'EDIT_TODO',
	todo
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
})

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_NORMAL: 'SHOW_NORMAL',
	SHOW_URGENT: 'SHOW_URGENT',
	SHOW_SUPERURGENT: 'SHOW_SUPERURGENT'
}