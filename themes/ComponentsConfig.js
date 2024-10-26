import {ThemeManager} from 'react-native-ui-lib';
import {Colors, BorderRadiuses} from 'react-native-ui-lib';

// with plain object
ThemeManager.setComponentTheme('Card', {
  borderRadius: 8
});

ThemeManager.setComponentTheme('View', (props, context) => {
  const themeProps = props;

  return themeProps;
});

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props, context) => {
  const themeProps = {
    backgroundColor: Colors.buttonBackgroundPrimary,
    color: Colors.white,
    borderRadius: BorderRadiuses.br10,
  };
  
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    themeProps.borderRadius = 0
  }

  if (props.border) {
    themeProps.backgroundColor = Colors.buttonBackgroundPrimary,
    themeProps.color = Colors.white;
    themeProps.outlineWidth = 3;
    themeProps.outlineColor = Colors.white;
  }

  return themeProps;
});