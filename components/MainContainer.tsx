import React from 'react';
import { Colors, View, ViewProps } from 'react-native-ui-lib';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <View style={{position: "relative"}} {...props} padding-page flex center backgroundColor={Colors.mainBackground}>
      {children}
    </View>
  );
};

export default MainContainer;