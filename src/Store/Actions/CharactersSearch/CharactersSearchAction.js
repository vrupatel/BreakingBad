import {dataActionCreator} from '../action_creater';
import {
  CHARACTERS_SEARCH_START,
  CHARACTERS_SEARCH_SUCCESS,
  CHARACTERS_SEARCH_FAILURE,
  CHARACTERS_SEARCH_EMPTY,
} from './CharactersSearchTypes';

export const onCharactersSearchStart = dataActionCreator(
  CHARACTERS_SEARCH_START,
);

export const onCharactersSearchSuccess = dataActionCreator(
  CHARACTERS_SEARCH_SUCCESS,
);

export const onCharactersSearchFailure = dataActionCreator(
  CHARACTERS_SEARCH_FAILURE,
);

export const setEmptyCharactersSearchList = dataActionCreator(
  CHARACTERS_SEARCH_EMPTY,
);
