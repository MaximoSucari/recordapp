import {ViewStyle, TextStyle, StyleSheet} from 'react-native';

interface Style {
  container: ViewStyle;
  actionContainer: ViewStyle;
  signUpButton: ViewStyle;
  loginButton: ViewStyle;
  titleText: TextStyle;
  signUpButtonText: TextStyle;
  loginButtonText: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
  },
  signUpButton: {
    backgroundColor: 'white',
    height: 60,
    width: 220,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: 'black',
    fontWeight: '700',
  },
  loginButton: {
    height: 60,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});
