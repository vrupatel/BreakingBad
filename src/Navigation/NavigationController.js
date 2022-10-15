import React, {useEffect, useState} from 'react';
import {SafeAreaView, Alert, Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';

const NavigationController = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default NavigationController;
