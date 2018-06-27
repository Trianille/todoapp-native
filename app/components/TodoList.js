import React from "react";
import PropTypes from "prop-types";
import {AppRegistry, ScrollView, StyleSheet, Text, View} from "react-native";

import Todo from "./Todo";

const TodoList = ({todos, actions}) => {
  componentDidMount = () => {
    this._interval = setInterval(() => {
      todos.map(todo => {
        if (Date.now() > todo.timeEnds) {
          actions.expiredTodo(todo.id);
        }
      });
    }, 60000);
  };

  componentWillUnmount = () => {
    clearInterval(this._interval);
  };
  componentDidMount();
  return (
    <ScrollView>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          completeTodo={() => actions.completeTodo(todo.id)}
          deleteTodo={() => {
            componentWillUnmount();
            actions.deleteTodo(todo.id);
          }}
          editTodo={() => {
            actions.editTodo(todo.id, todo.head, todo.body);
            actions.showModal();
          }}
        />
      ))}
    </ScrollView>
  );
};

TodoList.propTypes = {
  /*todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	toggleTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired*/
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoList;
