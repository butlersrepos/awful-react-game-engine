import { combineReducers } from 'redux'
import uiReducer from './ui-reducer'
import gameReducer from './game-reducer'
import controlsReducer from './controls-reducer'

export default combineReducers({
  ui: uiReducer,
  game: gameReducer,
  controls: controlsReducer
})
