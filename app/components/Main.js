import React from 'react';
import {
	AppRegistry,
	View
} from 'react-native';

import Header from './Header';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const Main = () => (
	<View style={{
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			height: '100%'
      }}>
		<View style={{height: '25%'}}>
			<Header />
		</View>
		<View style={{height: '40%'}}>
			<VisibleTodoList />
		</View>
		<View style={{height: 50}}>
			<Footer />
		</View>
	</View>
)


export default Main
