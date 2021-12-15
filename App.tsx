import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './src/screens/home/Home';
import Login from './src/screens/login/Login';
import MemoryDetail from './src/screens/memory-detail/MemoryDetail';
import NewMemory from './src/screens/new-memory/NewMemory';
import SignUp from './src/screens/sign-up/SignUp';
import Welcome from './src/screens/welcome/Welcome';

const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MemoryDetail" component={MemoryDetail} />
          <Stack.Screen name="NewMemory" component={NewMemory} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
