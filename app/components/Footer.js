import React, {Component} from "react";
import {Text, View, Button, TextInput, StyleSheet} from "react-native";

import FilterLink from "../containers/FilterLink";
import * as filterType from "../constants/TodoFilters";

export default class Footer extends Component {
  render() {
    return (<View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        height: "100%",
        backgroundColor: '#3498db'
      }}>
      <FilterLink style={{
          height: "25%"
        }} filter={filterType.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink style={{
          height: "25%"
        }} filter={filterType.SHOW_NORMAL}>
        normal
      </FilterLink>
      <FilterLink style={{
          height: "25%"
        }} filter={filterType.SHOW_IMPORTANT}>
        important
      </FilterLink>
      <FilterLink style={{
          height: "25%"
        }} filter={filterType.SHOW_CRITICAL}>
        critical
      </FilterLink>
    </View>);
  }
}
