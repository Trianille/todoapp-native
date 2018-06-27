import React, {Component} from "react";
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
} from "react-native";

import {connect} from "react-redux";
import {addTodo, hideModal, clear, deleteTodo} from "../actions";

const AddTodo = ({dispatch, data}) => {
  let id = data.id;
  let inputHead = data.head;
  let inputBody = data.body;
  let importance = "normal";
  let timed = false;
  let timeEnds = new Date();

  openTimePicker = async () => {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        timeEnds.setHours(hour);
        timeEnds.setMinutes(minute);
      }
    } catch ({code, message}) {
      console.warn("Cannot open time picker", message);
    }
  };

  openDatePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        timeEnds = new Date(year, month, day);
      } else {
        timeEnds = new Date();
      }
    } catch ({code, message}) {
      console.warn("Cannot open date picker", message);
    }
  };

  return (
    <View style={styles.addtodo}>
      <TextInput
        style={styles.plank}
        placeholder="Note head!"
        defaultValue={inputHead}
        onChangeText={node => (inputHead = node)}
        ref={inputHead => {
          this.textInput1 = inputHead;
        }}
      />
      <TextInput
        style={styles.plank}
        placeholder="Note body!"
        defaultValue={inputBody}
        onChangeText={node => (inputBody = node)}
        ref={inputBody => {
          this.textInput2 = inputBody;
        }}
      />
      <View style={styles.plank}>
      <TouchableOpacity
        onPress={() => {
          if (importance == "normal") {
            importance = "important";
            Alert.alert("Marked as important!");
          } else {
            importance = "normal";
            Alert.alert("Marked as normal!");
          }
        }}
        onLongPress={() => {
          importance = "critical";
          Alert.alert("Marked as CRITICAL!");
        }}>
        <Text>Important ? (long press to CRITICAL) </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.plank}>
        <TouchableOpacity
          onPress={() => {
            timed = true;
            this.openDatePicker().then(() => {
              this.openTimePicker();
            });
          }}>
          <Text>Pick date and time of ending ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plank}>
        <Button
          title="Add!"
          color="#841584"
          onPress={() => {
            if (!inputHead.trim()) {
              return;
            }
            dispatch(deleteTodo(id));
            dispatch(addTodo(id, inputHead, inputBody, importance, timed,  timeEnds.getTime()));
            dispatch(hideModal());
            dispatch(clear());
            inputHead = "";
            inputBody = "";
            this.textInput1.clear();
            this.textInput2.clear();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addTodo: {
    padding: 20
  },
  plank: {
    height: 40
  }
});

export default connect()(AddTodo);
