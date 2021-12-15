import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import { hp, wp } from '../../globals/Dimensions';

interface Style {
  container: ViewStyle;
  newMemoryButton: ViewStyle;
  titleTextStyle: TextStyle;
  newMemoryButtonText: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(243,243,243,1)'
  },
  titleTextStyle: {
    fontSize: 32,
  },
  newMemoryButton: {
    backgroundColor: 'blue',
    borderRadius: wp(25),
    height: hp(50),
    width: wp(220),
    justifyContent: 'center',
    alignItems: 'center',
  },
  newMemoryButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});
