import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import styles from './NewMemory.style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {hp, wp} from '../../globals/Dimensions';

interface WelcomeProps {
  navigation: any;
  route: any;
  memory: {
    name: string;
    id: number;
  };
}

const NewMemory: React.FC<WelcomeProps> = ({navigation, route, memory}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleEmitSound = () => {
    console.log('sonido');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

export default NewMemory;
