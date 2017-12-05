import { all, take, put, fork, select, call } from 'redux-saga/effects'
import { config } from 'src/game-config'

const delay = ms => new Promise(res => setTimeout(res, ms))

const stateRecordingSaga = function* () {
  while (true) {
    const gameState = yield select(state => state.game)
    const { playerX, playerY, playerDirection } = gameState
    const memorableParts = {
      playerX,
      playerY,
      playerDirection
    }

    yield put({ type: 'RECORD_STATE', payload: memorableParts })
    yield call(delay, config.RECORD_INTERVAL)
  }
}

const stateRecordingCooldownSaga = function* () {
  while (true) {
    yield take('RESTORE_STATE')

    const isOnCooldown = yield select(state => state.game.rewindCooldown)

    if (isOnCooldown) {
      yield call(delay, config.REWIND_LENGTH)
      yield put({ type: 'ENABLE_REWIND' })
    }
  }
}

export const rewindAbilitySagas = function* () {
  yield all([
    fork(stateRecordingSaga),
    fork(stateRecordingCooldownSaga)
  ])
}