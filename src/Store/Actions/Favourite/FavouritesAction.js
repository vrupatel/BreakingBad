import {dataActionCreator} from '../action_creater';
import {
  FAVOURITES_START,
  FAVOURITES_SUCCESS,
  FAVOURITES_FAILURE,
} from './FavouritesTypes';

export const onFavouritesStart = dataActionCreator(FAVOURITES_START);

export const onFavouritesSuccess = dataActionCreator(FAVOURITES_SUCCESS);

export const onFavouritesFailure = dataActionCreator(FAVOURITES_FAILURE);
