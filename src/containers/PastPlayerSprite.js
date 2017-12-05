import Sprite from 'src/components/Sprite'
import { connect } from 'react-redux'
import { isMoving } from 'src/state/selectors'

const mapStateToProps = state => {
  const oldGameState = state.game.recordedStates[0] || {}

  return {
    playerDirection: oldGameState.playerDirection || 'down',
    playerX: oldGameState.playerX,
    playerY: oldGameState.playerY,
    isMoving: true,
    isGhost: true
  }
}

export default connect(mapStateToProps)(Sprite)
