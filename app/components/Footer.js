import React, { Component } from 'react'
import {
	Text,
	View,
	Button,
	TextInput,
	StyleSheet
} from 'react-native';

import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

export default class Footer extends Component {
	render() {
		return (
			<View>
				<FilterLink filter={VisibilityFilters.SHOW_ALL}>
					All
				</FilterLink>
				<FilterLink filter={VisibilityFilters.SHOW_NORMAL}>
					normal
				</FilterLink>
				<FilterLink filter={VisibilityFilters.SHOW_URGENT}>
					urgent
				</FilterLink>
				<FilterLink filter={VisibilityFilters.SHOW_SUPERURGENT}>
					SUPERURGENT
				</FilterLink>
			</View>
		);
	}
}