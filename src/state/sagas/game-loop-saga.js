import { call, select, put } from 'redux-saga/effects'
import { isMoving } from '../selectors'

const delay = ms => new Promise(res => setTimeout(res, ms))

export default function* () {
  while (true) {
    const direction = yield select(state => state.game.playerDirection)
    const shouldMove = yield select(isMoving)

    if (shouldMove) {
      yield put({ type: `MOVE_${direction.toUpperCase()}` })
    }

    yield call(delay, 50)
  }
}