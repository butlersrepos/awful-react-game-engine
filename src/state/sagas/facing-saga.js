import { take, put } from 'redux-saga/effects'

export default function* () {
  while (true) {
    const action = yield take('KEYDOWN')
  }
}
