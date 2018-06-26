import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Alert,
	TimePickerAndroid,
	DatePickerAndroid
} from 'react-native';

import { connect } from 'react-redux'
import { addTodo, hideModal } from '../actions'

const AddTodo = ({ dispatch, editing }) => {
	let inputHead = editing.head;
	let inputBody = editing.body;
	let importance = 'normal';
	let timeStarts = new Date;
	let timeEnds = new Date;
	let timed = false;

	openTimePicker = async() => {
		try {
			const {action, hour, minute} = await TimePickerAndroid.open({
				hour: 14, minute: 0
			});
			if (action !== TimePickerAndroid.dismissedAction) {
				timeEnds.setHours(hour);
				timeEnds.setMinutes(minute);
			}
		} catch ({code, message}) {
			console.warn('Cannot open time picker', message);
		}
	}

	openDatePicker = async() => {
		try {
			const {action, year, month, day} = await DatePickerAndroid.open({
				defDate: new Date(2020, 4, 25)
			});
			if (action !== DatePickerAndroid.dismissedAction) {(year, month, day) => {
				timeEnds = new Date(year, month, day);
			}}
		} catch ({code, message}) {
			console.warn('Cannot open date picker', message);
		}
	}

	return (
		<View style={{padding: 10}}>
			<TextInput
				style={{height: 40}}
				placeholder='Note head!'
				onChangeText={node => inputHead = node}
				ref={inputHead => { this.textInput1 = inputHead }}
			/>
			<TextInput
				style={{height: 40}}
				placeholder='Note body!'
				onChangeText={node => inputBody = node}
				ref={inputBody => { this.textInput2 = inputBody }}
			/>
			<TouchableOpacity
			onPress={() => {
				if (importance == 'normal') {
					importance = 'important';
					Alert.alert('Marked as important!')
				} else {
					importance = 'normal';
					Alert.alert('Marked as normal!')
				}
			}}
			onLongPress={() => {
				importance = 'critical';
				Alert.alert('Marked as CRITICAL!')
			}}
			>
				<Text>
					Important? (long press to CRITICAL)
				</Text>
			</TouchableOpacity>
			<View>
				<TouchableOpacity
					onPress={()=>{
						timed = true;
						this.openDatePicker().then(() => {
							this.openTimePicker();
					})}}
				>
					<Text>
						Pick date and time of ending?
					</Text>
				</TouchableOpacity>
			</View>
			<Button
				style={{height: 40}}
				title="Add!"
				color="#841584"
				onPress={() => {
					timeStarts = new Date().getTime();

					if (!inputHead.trim()) {
						return
					}
					dispatch(addTodo(inputHead, inputBody, importance, timeStarts, timeEnds));
					dispatch(hideModal());
					inputHead = '';
					inputBody = '';
					this.textInput1.clear()
					this.textInput2.clear()
				}}
			/>


		</View>
	)
}

export default connect()(AddTodo)
