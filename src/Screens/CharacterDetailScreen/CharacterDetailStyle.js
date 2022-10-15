import {StyleSheet} from 'react-native';
import Constant from '../../CommonFiles/Constant';

const CharacterDetailsStyle = StyleSheet.create({
  headerImageContainer: {
    height: Constant.height / 1.4,
  },
  imageBackgroundContainer: {
    width: '100%',
    height: Constant.height / 1.4,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
  },
  imageContainer: {
    flex: 1,
    marginTop: 150,
  },
  characterImage: {
    width: Constant.width / 2.4,
    height: Constant.width / 1.7,
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  characterNameText: {
    color: Constant.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 31,
    fontWeight: '700',
    marginTop: 20,
  },
  characterNickNameText: {
    color: Constant.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 5,
  },
  characterStatusText: {
    color: Constant.pink,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  titleText: {
    color: Constant.primaryGreen,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '500',
  },
  subtitleText: {
    color: Constant.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '700',
  },
  simpleText: {
    color: Constant.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    fontWeight: '300',
  },
  primaryTitleText: {
    color: Constant.primaryGreen,
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
    fontWeight: '700',
  },
  portrayedContainer: {marginHorizontal: 20},
  occupationContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  appearrdContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 20,
  },
  otherCharContainer: {
    marginLeft: 20,
    marginTop: 40,
  },
});

export default CharacterDetailsStyle;
