import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon4 from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FavouriteListScreen from '../Screens/Favourite/FavouriteListScreen';
import Constant from '../CommonFiles/Constant';

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
        options={{
          title: 'Favourites',
          headerShown: true,
          headerRight: () => (
            <Icon4
              name={'close-outline'}
              size={(Constant.width / 100) * 6}
              color={Constant.favoriteIconColor}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
