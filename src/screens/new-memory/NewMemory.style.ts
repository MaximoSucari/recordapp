import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {hp, wp} from '../../globals/Dimensions';

interface Style {
  container: ViewStyle;
  actionContainer: ViewStyle;
  signUpButton: ViewStyle;
  emailInput: TextStyle;
  passwordInput: TextStyle;
  signUpButtonText: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: '100%',
    width: '100%',
    alignContent: 'center',
  },
  actionContainer: {
    width: '100%',
    height: '100%',
    borderRadius: wp(15),
    backgroundColor: 'white',
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
    padding: wp(10),
  },
  passwordInput: {
    height: hp(40),
    width: wp(280),
    marginBottom: hp(15),
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: wp(15),
    padding: wp(10),
  },
  signUpButton: {
    backgroundColor: 'blue',
    borderRadius: wp(25),
    height: hp(50),
    width: wp(220),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: wp(18)
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});
