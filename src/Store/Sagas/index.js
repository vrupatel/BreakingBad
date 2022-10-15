import {all} from 'redux-saga/effects';
import Characters from './characters';
import CharactersSearch from './charactersSearch';

export default function* rootSaga() {
  yield all([Characters(), CharactersSearch()]);
}
