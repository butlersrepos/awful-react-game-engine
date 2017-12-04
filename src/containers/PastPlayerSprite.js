import Sprite from 'src/components/Sprite'
import { connect } from 'react-redux'
import { isMoving } from 'src/state/selectors'

const mapStateToProps = state => {
  const oldState = JSON.parse(window.rewind[0]);

  return {
    playerDirection: oldState.game.playerDirection,
    playerX: oldState.game.playerX,
    playerY: oldState.game.playerY,
    isMoving: isMoving(oldState),
    isGhost: true
  }
}

export default connect(mapStateToProps)(Sprite)
