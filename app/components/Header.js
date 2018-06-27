import React, {Component} from "react";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import TodoModal from "../containers/TodoModal";
import {showModal, hideModal, clear} from "../actions";

const Header = ({dispatch, open, data}) => {
  return (
    <View style={{padding: 10}}>
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>
          ToDo App!
        </Text>
      </View>
      <View style={{padding: 10}}>
        <Button
          style={{height: 40}}
          title="To add todo!"
          color="#841584"
          onPress={() => {
            dispatch(showModal());
          }}
        />
        <TodoModal
          data={data}
          isOpen={open}
          onClose={() => {
            dispatch(clear());
            dispatch(hideModal());
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  open: state.modal.isOpen,
  data: state.temp
});

export default connect(mapStateToProps)(Header);
