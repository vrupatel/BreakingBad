import {all} from 'redux-saga/effects';
import Characters from './characters';

export default function* rootSaga() {
  yield all([Characters()]);
}
