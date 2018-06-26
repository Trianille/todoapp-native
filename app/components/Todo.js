import React from 'react'
import {
	AppRegistry,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Button
} from 'react-native';

import PropTypes from 'prop-types'

const Todo = ({ id, head, body, importance, timeStarts, timeEnds, completed, editTodo, deleteTodo, completeTodo}) => {
	//timeStarts = timeStarts.toString();
	//timeEnds = timeEnds.toString();
	return (
		<View style={{flex: 1, borderBottomWidth: 2, backgroundColor: completed ? '#ff5722' : '#ffffff' }}>
			<TouchableOpacity
				onPress={editTodo}
				onLongPress={deleteTodo}
			>
				<View>
					<Text>
						{id}
					</Text>
					<Text>
						{head}
					</Text>
					<Text>
						{importance}
					</Text>
				</View>
				<View>
					<Text>
						{body}
					</Text>
				</View>
			</TouchableOpacity>
			<View>
				<Button
					style={{width: 40, height: 40}}
					title="Completed?"
					color="#841584"
					onPress={completeTodo}
				/>
			</View>
		</View>

	)
}


Todo.propTypes = {
	id: PropTypes.number.isRequired,
	head: PropTypes.string.isRequired,
	importance: PropTypes.string.isRequired
}

export default Todo
