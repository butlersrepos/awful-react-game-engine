import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import facingSaga from './sagas/facing-saga'
import tickSaga from './sagas/game-loop-saga'
import { rewindAbilitySagas } from './sagas/state-recording-saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(facingSaga)
sagaMiddleware.run(tickSaga)
sagaMiddleware.run(rewindAbilitySagas)

export default store
