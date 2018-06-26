import React from 'react'
import {
	AppRegistry,
	Text,
	View,
  Modal,
  Button
} from 'react-native';

import AddTodo from '../components/AddTodo'

const TodoModal = ({ isOpen, onClose, data }) => {
	return (
    <View style={{marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={isOpen}
              onRequestClose={() => {
                alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>
                  <AddTodo editing={data} />
                </View>
                <Button
                  style={{height: 40}}
                  title="hide!"
                  color="#841584"
                  onPress={onClose}
                />
              </View>
            </Modal>
          </View>
	)
}

export default TodoModal
