import {StyleSheet} from 'react-native';
import Constant from '../../CommonFiles/Constant';

const SearchScreenStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: Constant.headerBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  characterContainer: {
    //   flex: 1,
    margin: 8,
    width: Constant.width / 2 - 20,
    borderRadius: 8,
  },
  characterNameText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    fontWeight: '700',
  },
  characterNickNameText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },
  characterTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    // alignItems: 'center',
  },
  listEmptyComponent: {marginLeft: 20, marginTop: 30},
  primaryText: {
    color: Constant.primaryGreen,
    fontWeight: '300',
    fontSize: 24,
  },
});

export default SearchScreenStyle;
