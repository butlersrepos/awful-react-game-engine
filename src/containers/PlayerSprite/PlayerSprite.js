import Sprite from '../../presenters/Sprite'
import { connect } from 'react-redux'
import { isMoving } from '../../state/selectors'

const mapStateToProps = state => ({
  playerDirection: state.game.playerDirection,
  playerX: state.game.playerX,
  playerY: state.game.playerY,
  isMoving: isMoving(state)
})

export default connect(mapStateToProps)(Sprite)
