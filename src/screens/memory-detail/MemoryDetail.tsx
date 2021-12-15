import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './MemoryDetail.style';
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

const MemoryDetail: React.FC<WelcomeProps> = ({navigation, route, memory}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleEmitSound = () => {
    console.log('sonido');
  };

  console.log(route.params.memory);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            resizeMode={'cover'}
            source={route.params.memory.image}
            imageStyle={{borderRadius: wp(15), width: '100%'}}
            style={{height: 300, width: 600}}
          />
        </View>

        <View style={{margin: wp(15)}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              textAlign: 'left',
              marginBottom: hp(10),
            }}>
            {route.params.memory.name}
          </Text>
          <View style={{height: hp(240), width: '100%'}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleEmitSound}>
          <Text style={styles.signUpButtonText}>
            Recordar a {route?.params?.memory?.name}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MemoryDetail;
