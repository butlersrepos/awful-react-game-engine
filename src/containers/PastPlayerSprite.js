import { connect } from 'react-redux'
import { Sprite } from 'src/components/Sprite'
import character from 'src/assets/character.png'

const mapStateToProps = state => {
  const oldGameState = state.game.recordedStates[0] || {}

  return {
    spritesheet: character,
    spriteDirection: oldGameState.playerDirection || 'down',
    spriteX: oldGameState.playerX,
    spriteY: oldGameState.playerY,
    isMoving: true,
    isGhost: true
  }
}

export default connect(mapStateToProps)(Sprite)
