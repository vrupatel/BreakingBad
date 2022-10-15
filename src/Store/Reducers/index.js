import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import {CharactersReducer} from './Characters';
import {CharactersSearchReducer} from './CharactersSearch';

export const appReducer = combineReducers({
  Characters: CharactersReducer,
  CharactersSearch: CharactersSearchReducer,
});

export const rootReducer = (state, action) => {
  const stateCopy = action.type === 'START' ? undefined : {...state};
  return appReducer(stateCopy, action);
};
