import React, {useState} from 'react';
import { Colors, View, ViewProps } from 'react-native-ui-lib';

const MainContainer = ({ children, ...props }) => {
  return (
    <View style={{position: "relative"}} {...props} padding-page flex center>
      {children}
    </View>
  );
};

export default MainContainer;