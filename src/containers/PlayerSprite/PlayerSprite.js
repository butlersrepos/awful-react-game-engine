import Sprite from 'src/components/Sprite'
import { connect } from 'react-redux'
import { isMoving } from 'src/state/selectors'

const mapStateToProps = state => ({
  playerDirection: state.game.playerDirection,
  playerX: state.game.playerX,
  playerY: state.game.playerY,
  isMoving: isMoving(state)
})

export default connect(mapStateToProps)(Sprite)
