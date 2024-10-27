import {Colors, Typography, Spacings} from 'react-native-ui-lib';

Colors.loadColors({
  mainBackground: Colors.white,
  primaryColor: '#f4ce34',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',

  buttonBackgroundPrimary: "#102a4c",
  buttonTextPrimary: Colors.white,
});

Typography.loadTypographies({
  h1: {fontSize: 36, fontWeight: '600'},
  h2: {fontSize: 28, fontWeight: '500'},
  h3: {fontSize: 24, fontWeight: '400'},
  h4: {fontSize: 20, fontWeight: '300'},
  body: {fontSize: 18, fontWeight: '400'}
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});


Colors.loadSchemes({
  light: {
    mainBackground: Colors.white,
    bgColor: Colors.white,
    textColor: Colors.grey10,
    buttonBackgroundPrimary: "#102a4c",
    buttonTextPrimary: Colors.white,
    secondaryColor: '#81C3D7',
  },
  dark: {
    mainBackground: Colors.black,
    bgColor: Colors.black,
    textColor: Colors.white,
    buttonBackgroundPrimary: "#81C3D7",
    buttonTextPrimary: Colors.black,
    secondaryColor: '#102a4c',
  }
});