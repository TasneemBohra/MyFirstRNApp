import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress} >
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
);

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    borderRadius: 2,
    elevation: 1
  },
  textStyle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10
  }
};

export default Button;
