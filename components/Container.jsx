import React from 'react';
import { Colors, View, ViewProps } from 'react-native-ui-lib';

const Container = ({ children, ...props }) => {
  return (
    <View style={{position: "relative", padding: 10}} {...props} flex center padding>
      {children}
    </View>
  );
};

export default Container;