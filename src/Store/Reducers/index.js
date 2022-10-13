import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import {CharactersReducer} from './Characters';
import {FavouritesReducer} from './Favourites';

export const appReducer = combineReducers({
  Characters: CharactersReducer,
  Favourites: FavouritesReducer,
});

export const rootReducer = (state, action) => {
  const stateCopy = action.type === 'START' ? undefined : {...state};
  return appReducer(stateCopy, action);
};
