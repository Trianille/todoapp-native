import React from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from "react-native";

import PropTypes from "prop-types";

const Todo = ({
  id,
  head,
  body,
  importance,
  timed,
  timeEnds,
  expired,
  completed,
  editTodo,
  deleteTodo,
  completeTodo
}) => {
  let time = new Date();
  time.setTime(timeEnds);

  return (
    <View
      style={{
        flex: 1,
        borderBottomWidth: 2,
        backgroundColor: completed ? "#80cbc4" : "#ffffff"
      }}
    >
      <TouchableOpacity onPress={editTodo} onLongPress={deleteTodo}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text>

              {head}, {importance}
            </Text>
          </View>
          <View
            style={{
              width: 80,
              height: 50
            }}
          >
            <Button title="Done?" color="#841584" onPress={completeTodo} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text> {body} </Text>
          <Text
            style={{
              backgroundColor: expired ? "red" : "rgba(0, 0, 0, 0)"
            }}
          >

            {(time = timed ? "Expired: " + time.toLocaleString() : "")}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  head: PropTypes.string.isRequired,
  importance: PropTypes.string.isRequired
};

export default Todo;
