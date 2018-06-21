import React from 'react';
import {
	AppRegistry,
	View
} from 'react-native';

import AddTodo from './Header';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const Main = () => (
	<View style={{
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			height: '100%'
      }}>
		<View style={{height: '35%'}}>
			<AddTodo />
		</View>		
		<View style={{height: '43%'}}>
			<VisibleTodoList />
		</View>		
		<View style={{height: '22%'}}>
			<Footer />
		</View>
	</View>
)

export default Main  