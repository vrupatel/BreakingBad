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
import Constant from '../../CommonFiles/Constant';
import {onCharactersStart} from '../../Store/Actions/Characters';
import {onFavouritesSuccess} from '../../Store/Actions/Favourite';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  // const [favouriteCharId, setFavouriteCharId] = useState([]);

  const {charactersList, loading} = useSelector(state => state.Characters);
  const {favouriteCharId} = useSelector(state => state.Favourites);

  console.log('Home----->', charactersList);
  useEffect(() => {
    setTimeout(() => {
      dispatch(onCharactersStart());
    }, 3000);
  }, []);

  const AddToFavourite = id => {
    console.log('AddToFavourite', id);
    if (favouriteCharId.length !== 0) {
      if (!favouriteCharId.includes(id)) {
        // setFavouriteCharId([...favouriteCharId, id]);
        dispatch(onFavouritesSuccess([...favouriteCharId, id]));
        //addSuccessMesage("Song added to the playlist!");
      } else {
        let newArr = favouriteCharId.filter(i => i !== id);
        dispatch(onFavouritesSuccess(newArr));
        // setFavouriteCharId(newArr);
        //addErrorMesage("Song removed from the playlist!");
      }
    } else {
      let arr = [];
      arr.push(id);
      dispatch(onFavouritesSuccess(arr));
      // setFavouriteCharId(arr);
      //addSuccessMesage("Song added to the playlist!");
    }
  };

  const renderCharactersList = ({item, index}) => {
    // console.log('index', index);
    return (
      <View
        style={{
          flex: 1,
          margin: 8,
          width: Constant.width / 2 - 20,
          borderRadius: 8,

          // shadowColor: 'gray',
          // shadowOffset: {width: 0, height: 1},
          // shadowOpacity: 0.5,
          // shadowRadius: 2,
          // elevation: 3,
          // padding: 8,
        }}>
        <Image
          source={{uri: item.img}}
          style={{
            height: 230,
            width: '100%',
            borderRadius: 5,
          }}
          resizeMode="stretch"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            // alignItems: 'center',
          }}>
          <View>
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                fontWeight: '700',
              }}>
              {item.name}
            </Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '300'}}>
              {item.nickname}
            </Text>
          </View>
          <TouchableOpacity onPress={() => AddToFavourite(item.char_id)}>
            <Icon4
              name={renderName(item.char_id)}
              // this.state.detailsObj.isFavourite
              //   ? "ios-heart"  :
              // 'heart-outline'
              size={(Constant.width / 100) * 6}
              color={Constant.favoriteIconColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderName = id => {
    console.log('AddToFavourite', favouriteCharId, id);

    if (favouriteCharId.length !== 0) {
      if (favouriteCharId.includes(id)) return 'ios-heart';
      else return 'heart-outline';
    } else return 'heart-outline';
  };

  return (
    // <SafeAreaView >
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#070707',
          paddingVertical: 10,
        }}>
        <Text style={{color: Constant.white, fontSize: 23, fontWeight: '700'}}>
          The Breaking bad
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Icon2
            name="search1"
            style={{marginRight: 15}}
            size={(Constant.width / 100) * 6}
            color="#fff"
            solid
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FavouriteList');
            }}>
            <Icon4
              name={
                // this.state.detailsObj.isFavourite
                //   ? "ios-heart"  :
                // 'heart-outline'
                'ios-heart'
              }
              size={(Constant.width / 100) * 6}
              color={Constant.primaryGreen}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={charactersList}
        // showsVerticalScrollIndicator={false}
        renderItem={renderCharactersList}
        numColumns={2}
        // keyExtractor={item => item.char_id}
        keyExtractor={(item, index) => index}
        style={{flex: 1}}
      />
    </View>
    // </SafeAreaView>
  );
};

export default HomeScreen;
