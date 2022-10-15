import * as TYPES from '../Actions/Characters';

const initialState = {
  errorMsg: '',
  charactersList: [],
  favouriteCharList: [],
  favouriteCharIds: [],
  loading: false,
};

export const CharactersReducer = (state = initialState, {type, data}) => {
  console.log('inCharactersReducer id ----', data);
  switch (type) {
    case TYPES.CHARACTERS_START:
      return {
        ...state,
        loading: true,
      };
    case TYPES.CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersList: data.map(item => {
          const isFavItem = state.charactersList.find(
            x => x.char_id == item.char_id,
          );
          if (isFavItem)
            return {...item, isFavouriteChar: isFavItem.isFavouriteChar};
          else return {...item, isFavouriteChar: false};
        }),
        loading: false,
      };
    case TYPES.CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case TYPES.CHARACTERS_FAV:
      return {
        ...state,

        charactersList: state.charactersList.map(item => {
          if (item.char_id == data)
            return {
              ...item,
              isFavouriteChar: !item.isFavouriteChar,
            };
          else return item;
        }),

        loading: false,
      };
    default:
      return state;
  }
};
