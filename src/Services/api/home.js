import {store} from '../../Store';
import {END_POINTS, REQUEST_TYPE} from '../config';
import apiCaller from './api-caller';

export const getCharacters = async () => {
  // console.log('datainApiCall');
  try {
    const {data} = await apiCaller({
      method: REQUEST_TYPE.GET,
      endpoint: END_POINTS.charactersList,
      data: '',
    });
    // console.log('respDatainApiCall', data);
    return data;
  } catch (e) {
    console.log('error', e);
    return {error: true, msg: e?.response?.data};
  }
};

export const getSearchedCharacters = async ({searchText}) => {
  // console.log('datainApiCall---', searchText);
  try {
    const {data} = await apiCaller({
      method: REQUEST_TYPE.GET,
      endpoint: END_POINTS.charactersListSearch + searchText,
      data: '',
    });
    return data;
  } catch (e) {
    console.log('error', e);
    return {error: true, msg: e?.response?.data};
  }
};
