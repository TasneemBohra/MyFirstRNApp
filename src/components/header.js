// Import libs for making a Component
import React from 'react';
import { Text, View } from 'react-native'; // Destructured import

// Make a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#E91E63',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 26,
    color: '#FFFFFF'

  }
};

// Make the component available to other parts of the app
export default Header;
