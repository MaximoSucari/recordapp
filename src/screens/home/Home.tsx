import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Home.style';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {hp, wp} from '../../globals/Dimensions';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const memories = [
    {
      id: 1,
      name: 'Flor Villaverde',
      image: require('../../assets/memories/Flor.jpeg'),
    },
    {
      id: 2,
      name: 'Simón',
      image: require('../../assets/memories/Simon.jpeg'),
    },
    {
      id: 3,
      name: 'Máximo',
      image: require('../../assets/memories/Maximo.jpeg'),
    },
  ];

  const navigateMemory = (memory: any) => {
    return navigation.navigate('MemoryDetail', {memory: memory});
  };

  const renderItem = ({
    item,
  }: {
    item: {name: string; id: number; image: any};
  }) => {
    console.log(item);
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigateMemory(item)}
          style={{
            height: hp(140),
            width: wp(120),
            backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp(15),
            margin: wp(6),
          }}>
          <ImageBackground
            source={item.image}
            resizeMode={'cover'}
            imageStyle={{height: '100%', width: '100%', borderRadius: wp(15)}}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: wp(10),
              justifyContent: 'flex-end',
            }}>
            <LinearGradient
              locations={[0.65, 0.93]}
              colors={['transparent', 'darkblue']}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.7,
                borderBottomEndRadius: wp(10),
                borderBottomStartRadius: wp(10),
              }}></LinearGradient>
            <Text style={{color: 'white', margin: wp(5)}}>{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: wp(20),
            margin: wp(12),
            alignSelf: 'flex-start'
          }}>
          Tus memorias
        </Text>
        <FlatList
          data={memories}
          style={{marginLeft: wp(12)}}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{marginTop: hp(22)}}>
          <TouchableOpacity style={styles.newMemoryButton} onPress={()=> navigation.navigate("NewMemory")}>
            <Text style={styles.newMemoryButtonText}>Nuevo recuerdo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
