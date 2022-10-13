import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Constant from '../../CommonFiles/Constant';
import {onCharactersStart} from '../../Store/Actions/Characters';

const FavouriteListScreen = () => {
  //   const dispatch = useDispatch();

  const {charactersList, loading} = useSelector(state => state.Characters);

  console.log('Home----->', charactersList);
  useEffect(() => {
    setTimeout(() => {
      //   dispatch(onCharactersStart());
    }, 3000);
  }, []);

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
          <Icon4
            name={
              // this.state.detailsObj.isFavourite
              //   ? "ios-heart"  :
              'heart-outline'
            }
            size={(Constant.width / 100) * 6}
            color={Constant.favoriteIconColor}
          />
        </View>
      </View>
    );
  };

  return (
    // <SafeAreaView >
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <View
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
        </View>
      </View> */}
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

export default FavouriteListScreen;
