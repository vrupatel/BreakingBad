import * as TYPES from '../Actions/Favourite';

const initialState = {
  errorMsg: '',
  favouriteCharId: [],
  loading: false,
};

export const FavouritesReducer = (state = initialState, {type, data}) => {
  //   console.log('inCharactersReducer', data);
  switch (type) {
    case TYPES.FAVOURITES_START:
      return {
        ...state,
        loading: true,
      };
    case TYPES.FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteCharId: data,
        loading: false,
      };
    case TYPES.FAVOURITES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
