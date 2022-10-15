import {store} from '..';
import * as TYPES from '../Actions/CharactersSearch';

const initialState = {
  errorMsg: '',
  charactersSearchList: [],
  loading: false,
};

export const CharactersSearchReducer = (state = initialState, {type, data}) => {
  console.log('inCharactersReducer', data);
  switch (type) {
    case TYPES.CHARACTERS_SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case TYPES.CHARACTERS_SEARCH_SUCCESS:
      return {
        ...state,
        charactersSearchList: data.charactersSearchCall.map(item => {
          const isFav = data.favIdList.includes(item.char_id);
          if (isFav) return {...item, isFavouriteChar: true};
          else return {...item, isFavouriteChar: false};
        }),
        loading: false,
      };
    case TYPES.CHARACTERS_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case TYPES.CHARACTERS_SEARCH_EMPTY:
      return {
        // ...state,
        charactersSearchList: [],
        loading: false,
      };
    default:
      return state;
  }
};
