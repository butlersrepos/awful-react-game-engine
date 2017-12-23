import { connect } from 'react-redux'
import { Sprite } from 'src/components/Sprite'
import { isMoving } from 'src/state/selectors'
import character from 'src/assets/character.png'

const mapStateToProps = state => ({
  spritesheet: character,
  spriteDirection: state.game.playerDirection,
  spriteX: state.game.playerX,
  spriteY: state.game.playerY,
  isMoving: isMoving(state)
})

export default connect(mapStateToProps)(Sprite)
