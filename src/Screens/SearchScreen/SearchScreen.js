import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import CommonStyle from '../../CommonFiles/CommonStyle';
import styles from './SearchScreenStyle';
import Constant from '../../CommonFiles/Constant';
import {
  onCharactersSearchStart,
  setEmptyCharactersSearchList,
} from '../../Store/Actions/CharactersSearch';
import {onCharactersFav} from '../../Store/Actions/Characters';

const SearchScreen = ({navigation}) => {
  const {charactersSearchList, loading} = useSelector(
    state => state.CharactersSearch,
  );

  // console.log('charactersSearchList', charactersSearchList);

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('inUseEffect');
    dispatch(setEmptyCharactersSearchList());
  }, []);

  const onChangeSearch = query => {
    // console.log('search1', query);
    setSearchText(query);
  };

  const onGetCharactersList = () => {
    const data = {
      searchText: searchText,
    };
    dispatch(onCharactersSearchStart(data));
  };

  // const AddToFavourite = id => {
  //   dispatch(onCharactersFav(id));
  // };

  const renderCharactersList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CharacterDetails', {
            Char_Id: item.char_id,
            characterDetails: item,
          })
        }
        style={styles.characterContainer}>
        <Image
          source={{uri: item.img}}
          style={CommonStyle.characterImage}
          resizeMode="stretch"
        />
        <View style={styles.characterTextContainer}>
          <View>
            <Text numberOfLines={1} style={styles.characterNameText}>
              {item.name}
            </Text>
            <Text style={styles.characterNickNameText}>{item.nickname}</Text>
          </View>
          {/* <TouchableOpacity onPress={() => AddToFavourite(item.char_id)}> */}
          <Icon4
            name={item.isFavouriteChar ? 'ios-heart' : 'heart-outline'} //renderName(item.isFavourite)
            size={(Constant.width / 100) * 6}
            color={
              item.isFavouriteChar
                ? Constant.primaryGreen
                : Constant.favoriteIconColor
            }
          />
          {/* </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
    );
  };

  const onClickSearch = () => {
    if (searchText != '') {
      onGetCharactersList();
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={CommonStyle.SafeAreaView}>
      <View style={styles.headerContainer}>
        <TextInput
          placeholder="Search Characters"
          placeholderTextColor={Constant.white}
          style={{fontSize: 20, color: Constant.white}}
          value={searchText}
          onChangeText={onChangeSearch}
          onSubmitEditing={() => onClickSearch()}
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => onClickSearch()}>
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
              navigation.goBack();
            }}>
            <Icon4
              name="close-outline"
              size={(Constant.width / 100) * 8}
              color="#fff"
              solid
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={charactersSearchList}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        renderItem={renderCharactersList}
        numColumns={2}
        keyExtractor={(item, index) => index}
        style={{flex: 1}}
        ListEmptyComponent={() => {
          return (
            <View style={styles.listEmptyComponent}>
              <Text style={styles.primaryText}>No Characters Found</Text>
              <Text
                style={[
                  styles.primaryText,
                  {
                    color: Constant.white,
                  },
                ]}>
                Try Again
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
