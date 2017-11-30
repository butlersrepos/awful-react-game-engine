import { call, select, put } from 'redux-saga/effects'
import { isMoving } from '../selectors'
import { config } from 'src//game-config'

const delay = ms => new Promise(res => setTimeout(res, ms))

export default function* () {
  while (true) {
    const W = yield select(state => state.controls.W_DOWN)
    const A = yield select(state => state.controls.A_DOWN)
    const S = yield select(state => state.controls.S_DOWN)
    const D = yield select(state => state.controls.D_DOWN)

    if (W) yield put({ type: `MOVE_UP` })
    if (A) yield put({ type: `MOVE_LEFT` })
    if (S) yield put({ type: `MOVE_DOWN` })
    if (D) yield put({ type: `MOVE_RIGHT` })

    yield call(delay, config.TICK_DELAY)
  }
}