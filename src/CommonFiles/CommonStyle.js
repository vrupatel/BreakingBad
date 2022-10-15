import {StyleSheet, Platform} from 'react-native';
import Constant from './Constant';

const CommonStyle = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Constant.black,
  },
  headerTitle: {
    color: Constant.primaryGreen,
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
    fontWeight: '700',
  },
  characterContainer: {
    // flex: 1,
    margin: 8,
    width: Constant.width / 2 - 20,
    borderRadius: 8,
  },
  characterImage: {
    height: 230,
    width: '100%',
    borderRadius: 5,
  },
  characterTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    // alignItems: 'center',
  },
  characterNameText: {
    color: Constant.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    fontWeight: '700',
  },
  characterNickNameText: {
    color: Constant.white,
    fontSize: 14,
    fontWeight: '300',
  },
});

export default CommonStyle;
