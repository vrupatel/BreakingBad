import * as TYPES from '../Actions/Characters';

const initialState = {
  errorMsg: '',
  charactersList: [],
  loading: false,
};

export const CharactersReducer = (state = initialState, {type, data}) => {
  //   console.log('inCharactersReducer', data);
  switch (type) {
    case TYPES.CHARACTERS_START:
      return {
        ...state,
        loading: true,
      };
    case TYPES.CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersList: data,
        loading: false,
      };
    case TYPES.CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
