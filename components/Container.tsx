import React from 'react';
import { Colors, View, ViewProps } from 'react-native-ui-lib';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <View style={{position: "relative", padding: 10}} {...props} flex center padding>
      {children}
    </View>
  );
};

export default Container;