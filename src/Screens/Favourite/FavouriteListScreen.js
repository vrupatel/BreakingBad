import React, {useEffect} from 'react';
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
import CommonStyle from '../../CommonFiles/CommonStyle';
import {onCharactersFav} from '../../Store/Actions/Characters';

const FavouriteListScreen = ({navigation}) => {
  const {charactersList, loading} = useSelector(state => state.Characters);
  const favouriteCharList = charactersList.filter(item => {
    if (item.isFavouriteChar == true) return item;
  });

  const dispatch = useDispatch();
  useEffect(() => {}, []);

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
          <TouchableOpacity
            onPress={() => dispatch(onCharactersFav(item.char_id))}>
            <Icon4
              name={'ios-heart'}
              size={(Constant.width / 100) * 6}
              color={Constant.primaryGreen}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={CommonStyle.SafeAreaView}>
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
        data={favouriteCharList}
        showsVerticalScrollIndicator={false}
        renderItem={renderCharactersList}
        numColumns={2}
        keyExtractor={(item, index) => index}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default FavouriteListScreen;
