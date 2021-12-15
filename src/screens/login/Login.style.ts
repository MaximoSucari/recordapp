import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import { hp, wp } from '../../globals/Dimensions';

interface Style {
  container: ViewStyle;
  actionContainer: ViewStyle;
  loginButton: ViewStyle;
  emailInput: TextStyle;
  passwordInput: TextStyle;
  loginButtonText: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    width: '100%',
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailInput: {
    height: hp(40),
    width: wp(280),
    marginBottom: hp(15),
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: wp(15),
    padding: wp(10)
  },
  passwordInput: {
    height: hp(40),
    width: wp(280),
    marginBottom: hp(15),
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: wp(15),
    padding: wp(10)
  },
  loginButton: {
    backgroundColor: 'blue',
    borderRadius: wp(25),
    height: hp(50),
    width: wp(220),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});
