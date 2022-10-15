import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Ionicons';
import styles from './HomeScreenStyle';
import Constant from '../../CommonFiles/Constant';
import {
  onCharactersFav,
  onCharactersStart,
} from '../../Store/Actions/Characters';
import CommonStyle from '../../CommonFiles/CommonStyle';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {charactersList} = useSelector(state => state.Characters);

  useEffect(() => {
    dispatch(onCharactersStart());
  }, []);

  const AddToFavourite = id => {
    dispatch(onCharactersFav(id));
  };

  const renderCharactersList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CharacterDetails', {
            Char_Id: item.char_id,
            characterDetails: item,
          })
        }
        style={CommonStyle.characterContainer}>
        <Image
          source={{uri: item.img}}
          style={CommonStyle.characterImage}
          resizeMode="stretch"
        />
        <View style={CommonStyle.characterTextContainer}>
          <View>
            <Text numberOfLines={1} style={CommonStyle.characterNameText}>
              {item.name}
            </Text>
            <Text style={CommonStyle.characterNickNameText}>
              {item.nickname}
            </Text>
          </View>
          <TouchableOpacity onPress={() => AddToFavourite(item.char_id)}>
            <Icon4
              name={item.isFavouriteChar ? 'ios-heart' : 'heart-outline'} //renderName(item.isFavourite)
              size={(Constant.width / 100) * 6}
              color={
                item.isFavouriteChar
                  ? Constant.primaryGreen
                  : Constant.favoriteIconColor
              }
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={CommonStyle.SafeAreaView}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>The Breaking bad</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <Icon2
              name="search1"
              style={{marginRight: 15}}
              size={(Constant.width / 100) * 6}
              color="#fff"
              solid
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FavouriteList');
            }}>
            <Icon4
              name={'ios-heart'}
              size={(Constant.width / 100) * 6}
              color={Constant.primaryGreen}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={charactersList}
        showsVerticalScrollIndicator={false}
        initialNumToRender={14}
        renderItem={renderCharactersList}
        numColumns={2}
        keyExtractor={(item, index) => index}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
