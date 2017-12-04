import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import facingSaga from './sagas/facing-saga'
import tickSaga from './sagas/game-loop-saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(facingSaga)
sagaMiddleware.run(tickSaga)

const rewindLength = 3000
const recordInterval = 100
const recordedFrames = rewindLength / recordInterval

window.rewind = [JSON.stringify(store.getState())]

setInterval(() => {
  console.time('record state')
  window.rewind.push(JSON.stringify(store.getState()))
  if (window.rewind.length > recordedFrames) { window.rewind = window.rewind.slice(1) }
  console.timeEnd('record state')
}, recordInterval)

window.rewindCooldown = false
document.addEventListener('keyup', event => {
  if (event.key === 't' && !window.rewindCooldown) {
    window.rewindCooldown = true
    setTimeout(() => window.rewindCooldown = false, rewindLength)
    store.dispatch({
      type: 'RESTORE_STATE',
      payload: JSON.parse(window.rewind[0])
    })
  }
})

export default store
