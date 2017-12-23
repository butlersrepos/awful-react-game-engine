import Sprite from 'src/components/Sprite'
import { connect } from 'react-redux'

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
