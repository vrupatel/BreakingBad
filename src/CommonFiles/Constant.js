import {Dimensions, Platform} from 'react-native';

const KBaseURL = 'https://www.breakingbadapi.com/api/';

class Constant {
  static KBaseURL = KBaseURL;

  static width = Dimensions.get('window').width;
  static height = Dimensions.get('window').height;

  static Color = '#CFD5DC';
  static white = 'white';
  static primaryGreen = '#18CA75';
  static favoriteIconColor = '#3D3D3D';
  static headerBackgroundColor = '#070707';
}

export default Constant;
