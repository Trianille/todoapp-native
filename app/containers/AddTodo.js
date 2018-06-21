import React, { Component } from 'react'
import {
	Text,
	View,
	Button,
	TextInput,
	StyleSheet
} from 'react-native';

export default class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''}
	}
	
	onPressLearnMore() {
		//do nothing
	}
	
	render() {
		return (
			<View style={{padding: 10}}>
				<Text>
					AddTodo!
				</Text>
				<TextInput
					style={{height: 40}}
					placeholder="Note name!"
					onChangeText={(text) => this.setState({text})}
				/>
				<TextInput
					style={{height: 40}}
					placeholder="Note body!"
					onChangeText={(text) => this.setState({text})}
				/>
				<Button 
					title="Add!"
					color="#841584"
					onPress={this.onPressLearnMore}
				/>
			</View>
		);
	}
}