import {call, put, takeEvery} from '@redux-saga/core/effects';
import {getCharacters} from '../../Services/api';
import {
  CHARACTERS_START,
  onCharactersSuccess,
  onCharactersFailure,
} from '../Actions/Characters';

export default function* Characters() {
  yield takeEvery(CHARACTERS_START, handleCharacters);
}

function* handleCharacters({}) {
  const charactersCall = yield call(getCharacters);
  console.log('charactersCallResp', charactersCall);

  if (charactersCall.length > 0) {
    console.log('inSuccess');
    yield put(onCharactersSuccess(charactersCall));
  } else if (charactersCall) {
    console.log('inFailure');
    yield put(onCharactersFailure(charactersCall));
    return null;
  }
}
