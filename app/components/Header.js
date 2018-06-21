import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import AddTodo from './AddTodo'

const Header = () => {
	return (
		<View style={{padding: 10}}>
			<View style={{padding: 10}}>
				<Text>
					Todoapp!
				</Text>
			</View>
			<AddTodo/>
		</View>
	)
}

export default Header