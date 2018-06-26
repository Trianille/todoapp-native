import React, { Component } from 'react'
import {
	Text,
	View,
	Button,
	TextInput,
	StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as filterType from '../constants/TodoFilters'
import TodoList from '../components/TodoList'
import * as TodoActions from '../actions'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case filterType.SHOW_ALL:
			return todos
		case filterType.SHOW_NORMAL:
			return todos.filter(t => t.importance == 'normal')
		case filterType.SHOW_IMPORTANT:
			return todos.filter(t => t.importance == 'important')
		case filterType.SHOW_CRITICAL:
			return todos.filter(t => t.importance == 'critical')
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/*const mapStateToProps = state => ({
	todos: state.todos
})

/*const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})*/

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)
