import { take, put } from 'redux-saga/effects'

export default function* () {
  while (true) {
    const action = yield take('KEYDOWN')

    switch (action.key) {
      case 'w':
        yield put({ type: 'FACING_UP' })
        break
      case 'a':
        yield put({ type: 'FACING_LEFT' })
        break
      case 's':
        yield put({ type: 'FACING_DOWN' })
        break
      case 'd':
        yield put({ type: 'FACING_RIGHT' })
        break
      default:
    }
  }
}
