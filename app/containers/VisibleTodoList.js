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

import * as TodoActions from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case TodoActions.VisibilityFilters.SHOW_ALL:
			return todos
		case TodoActions.VisibilityFilters.SHOW_NORMAL:
			return todos.filter(t => t.importance == 'normal')
		case TodoActions.VisibilityFilters.SHOW_URGENT:
			return todos.filter(t => t.importance == 'urgent')
		case TodoActions.VisibilityFilters.SHOW_SUPERURGENT:
			return todos.filter(t => t.importance == 'super-urgent')
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