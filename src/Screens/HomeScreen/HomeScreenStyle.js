import {StyleSheet} from 'react-native';
import Constant from '../../CommonFiles/Constant';

const HomeScreenStyle = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Constant.headerBackgroundColor,
  },
  headerTitle: {
    color: Constant.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
    fontWeight: '700',
  },
});

export default HomeScreenStyle;
