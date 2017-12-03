import { take } from 'redux-saga/effects'

export default function* () {
  while (true) {
    yield take('KEYDOWN')
  }
}
