import React from "react";
import {View, StyleSheet} from "react-native";

import Header from "./Header";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

const Main = () => (
  <View style={styles.container}>
    <View style={styles.block}>
      <Header />
    </View>
    <View>
      <VisibleTodoList />
    </View>
    <View style={styles.block}>
      <Footer />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#ecf0f1'
  },
  block: {
    height: 50
  }
});

export default Main;
