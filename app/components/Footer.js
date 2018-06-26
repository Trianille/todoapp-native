import React, { Component } from 'react'
import {
	Text,
	View,
	Button,
	TextInput,
	StyleSheet
} from 'react-native';

import FilterLink from '../containers/FilterLink'
import * as filterType from '../constants/TodoFilters'

export default class Footer extends Component {
	render() {
		return (
			<View
			style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
			>
				<FilterLink
				filter={filterType.SHOW_ALL}
				>
					All
				</FilterLink>
				<FilterLink
				filter={filterType.SHOW_NORMAL}
				>
					normal
				</FilterLink>
				<FilterLink
				filter={filterType.SHOW_IMPORTANT}
				>
					important
				</FilterLink>
				<FilterLink
				filter={filterType.SHOW_CRITICAL}
				>
					critical
				</FilterLink>
			</View>
		);
	}
}
