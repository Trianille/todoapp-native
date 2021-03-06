import React from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import PropTypes from "prop-types";

const Link = ({active, children, onClick}) => (
  <Button onPress={onClick} disabled={active} title={children} />
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
