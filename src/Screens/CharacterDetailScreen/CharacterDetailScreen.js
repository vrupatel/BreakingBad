import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icon4 from 'react-native-vector-icons/Ionicons';

import styles from './CharacterDetailStyle';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '../../CommonFiles/CommonStyle';
import Constant from '../../CommonFiles/Constant';

const CharacterDetailScreen = ({route}) => {
  const characterDetails = route.params.characterDetails;

  return (
    <SafeAreaView style={CommonStyle.SafeAreaView}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.headerImageContainer}>
          <ImageBackground
            source={{uri: characterDetails.img}}
            style={styles.imageBackgroundContainer}
            resizeMode="stretch"
          />
          <View style={styles.imageContainer}>
            <LinearGradient
              style={{flex: 1}}
              colors={['transparent', '#000000']}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: characterDetails.img}}
                  style={styles.characterImage}
                />

                <Text style={styles.characterNameText}>
                  {characterDetails.name}
                </Text>

                <Text style={styles.characterNickNameText}>
                  {characterDetails.nickname}
                </Text>

                <Text style={styles.characterStatusText}>
                  {characterDetails.status}
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* ----- portyard ------- */}
        <View style={styles.portrayedContainer}>
          <Text style={styles.titleText}>Portrayed</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.subtitleText}>
              {characterDetails.portrayed}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.simpleText, {marginRight: 5}]}>
                {characterDetails.birthday}
              </Text>
              <Icon4
                name={'gift-outline'}
                size={(Constant.width / 100) * 5}
                color={Constant.white}
              />
            </View>
          </View>
        </View>
        {/* ----- occupation ------- */}
        <View style={styles.occupationContainer}>
          <Text style={styles.titleText}>Occupation</Text>

          {characterDetails.occupation.map(item => {
            console.log('item', item);
            return <Text style={styles.subtitleText}>{item}</Text>;
          })}
        </View>

        {/* ------ Appeared in ------ */}
        <View style={styles.appearrdContainer}>
          <Text style={styles.titleText}>Appeared in</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row', marginTop: 5}}>
            {characterDetails.appearance.map(item => {
              return (
                <Text
                  style={[
                    styles.subtitleText,
                    {
                      marginTop: 2,
                      padding: 5,
                      backgroundColor: Constant.bubbleBackGroundColor,
                      borderRadius: 3,
                      marginRight: 10,
                    },
                  ]}>
                  Season {item}
                </Text>
              );
            })}
          </ScrollView>
        </View>
        {/* ------ Other Characters ------ */}
        {/* <View style={styles.otherCharContainer}>
          <Text style={styles.primaryTitleText}>Other Characters</Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterDetailScreen;
