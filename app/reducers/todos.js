const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state, {
					id: action.id,
					head: action.head,
					body: action.body,
					importance: action.importance,
					timed: false,
					timeStarts: action.timeStarts,
					timeEnds: action.timeEnds,
					expired: false,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
				? {...todo, completed: !todo.completed}
				: todo
      )
		case 'DELETE_TODO':
			return state.filter(todo =>
				todo.id !== action.id
		)
		case 'EDIT_TODO':
			return state
		default:
			return state
	}
}

export default todos