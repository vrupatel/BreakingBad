import {dataActionCreator} from '../action_creater';
import {
  CHARACTERS_START,
  CHARACTERS_SUCCESS,
  CHARACTERS_FAILURE,
  CHARACTERS_FAV,
} from './CharactersTypes';

export const onCharactersStart = dataActionCreator(CHARACTERS_START);

export const onCharactersSuccess = dataActionCreator(CHARACTERS_SUCCESS);

export const onCharactersFailure = dataActionCreator(CHARACTERS_FAILURE);

export const onCharactersFav = dataActionCreator(CHARACTERS_FAV);
