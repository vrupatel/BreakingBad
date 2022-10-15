import {call, put, takeEvery} from '@redux-saga/core/effects';
import {store} from '..';
import {getCharacters, getSearchedCharacters} from '../../Services/api';
import {
  CHARACTERS_SEARCH_START,
  onCharactersSearchSuccess,
  onCharactersSearchFailure,
} from '../Actions/CharactersSearch';

export default function* CharactersSearch() {
  yield takeEvery(CHARACTERS_SEARCH_START, handleCharactersSearch);
}

function* handleCharactersSearch({data}) {
  const charactersSearchCall = yield call(getSearchedCharacters, data);
  console.log('charactersCallResp', charactersSearchCall);

  if (charactersSearchCall.length > 0) {
    console.log('inSuccess');
    const {charactersList} = store.getState().Characters;
    const favIdList = charactersList
      .filter(item => item.isFavouriteChar == true)
      .map(item => item.char_id);

    yield put(onCharactersSearchSuccess({charactersSearchCall, favIdList}));
  } else if (charactersSearchCall) {
    console.log('inFailure');
    yield put(onCharactersSearchFailure(charactersSearchCall));
    return null;
  }
}
