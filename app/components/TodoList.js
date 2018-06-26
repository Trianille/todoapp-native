import React from 'react'
import PropTypes from 'prop-types'
import {
	AppRegistry,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';

import Todo from './Todo'

const TodoList = ({ todos, actions }) => (
	<ScrollView>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				completeTodo={() => actions.completeTodo(todo.id)}
				deleteTodo={() => actions.deleteTodo(todo.id)}
				editTodo={() => {
					actions.editTodo(todo);
					actions.showModal();
				}}
			/>
		)}
	</ScrollView>
)

TodoList.propTypes = {
	/*todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	toggleTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired*/
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default TodoList
