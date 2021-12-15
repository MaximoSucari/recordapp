import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styles from './SignUp.style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {hp, wp} from '../../globals/Dimensions';
import {useMutation} from 'react-query';
import {signUp} from '../../services/api/auth/Auth';

interface WelcomeProps {
  navigation: any;
}

const SignUp: React.FC<WelcomeProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUpMutation = useMutation(
    (signUpCredentials: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => signUp(signUpCredentials),
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (signUpMutation.isSuccess && signUpMutation.data) {
      console.log(signUpMutation.data.data);
      navigation.navigate('Home');
    }
  });

  const handleRegister = () => {
    signUpMutation.mutate({
      firstName,
      lastName,
      email,
      password,
    });
  
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <View style={{padding: hp(20)}}>
            <TextInput
              placeholder={'Nombre'}
              style={styles.emailInput}
              autoCapitalize={'none'}
              value={firstName}
              onChangeText={(text: string) => setFirstName(text)}
            />
            <TextInput
              placeholder={'Apellido'}
              style={styles.emailInput}
              autoCapitalize={'none'}
              value={lastName}
              onChangeText={(text: string) => setLastName(text)}
            />
            <TextInput
              placeholder={'Email'}
              style={styles.emailInput}
              autoCapitalize={'none'}
              value={email}
              onChangeText={(text: string) => setEmail(text)}
            />
            <TextInput
              placeholder={'Contrsaseña'}
              secureTextEntry={true}
              style={styles.passwordInput}
              autoCapitalize={'none'}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleRegister}>
            <Text style={styles.signUpButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
