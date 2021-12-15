import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import styles from './Welcome.style';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface WelcomeProps {
  navigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleSignUp = () => {
    console.log('Navigate SignUp');
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    console.log('Navigate Login');
    navigation.navigate('Login');

  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, {height: '100%', width: '100%'}]}>
        <View style={styles.container}>
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: 'white',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Tus recuerdos en una app
              </Text>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
