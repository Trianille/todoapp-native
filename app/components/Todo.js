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

const Todo = ({ id, head, body, importance, timeStarts, timeEnds, completed, editTodo, deleteTodo, toggleTodo}) => {
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
					<Text>
						{timeStarts} - {timeEnds}
					</Text>
				</View>
				<View>
					<Text>
						{body}
					</Text>
				</View>
			</TouchableOpacity>
			<Button
				style={{width: 40, height: 40}}
				title="Push!"
				color="#841584"
				onPress={toggleTodo}
			/>
		</View>
		
	)
}


Todo.propTypes = {
	id: PropTypes.number.isRequired,
	head: PropTypes.string.isRequired,
	importance: PropTypes.string.isRequired
}

export default Todo