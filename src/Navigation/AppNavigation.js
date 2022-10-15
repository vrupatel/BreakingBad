import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon4 from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FavouriteListScreen from '../Screens/Favourite/FavouriteListScreen';
import Constant from '../CommonFiles/Constant';
import CharacterDetailScreen from '../Screens/CharacterDetailScreen/CharacterDetailScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import CommonStyle from '../CommonFiles/CommonStyle';

export default function AppNavigation({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTitleStyle: {fontWeight: '500', fontSize: 18},
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavouriteList"
        component={FavouriteListScreen}
        options={({navigation}) => ({
          title: '',
          headerLeft: () => (
            <Text style={CommonStyle.headerTitle}>Favourites</Text>
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: Constant.headerBackgroundColor,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon4
                name={'close-outline'}
                size={(Constant.width / 100) * 6.5}
                color={Constant.white}
              />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: Constant.white,
        }}
      />

      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
