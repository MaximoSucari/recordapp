import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './Login.style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {hp} from '../../globals/Dimensions';
import {useMutation} from 'react-query';
import {login} from '../../services/api/auth/Auth';

interface WelcomeProps {
  navigation: any;
}

const Login: React.FC<WelcomeProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const logIn = useMutation(
    (loginCredentials: {email: string; password: string}) =>
      login(loginCredentials),
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLogin = (loginCredentials: any) => {
    logIn.mutate({
      email,
      password,
    });
    //navigation.navigate('Home');
  };

  useEffect(() => {
    if (logIn.isSuccess && logIn.data) {
      console.log(logIn.data.data);
      navigation.navigate('Home');
    }
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <View style={{padding: hp(20)}}>
            <TextInput
              placeholder={'Email'}
              style={styles.emailInput}
              autoCapitalize={'none'}
              value={email}
              onChangeText={(text: string) => setEmail(text)}
            />
            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.passwordInput}
              autoCapitalize={'none'}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
