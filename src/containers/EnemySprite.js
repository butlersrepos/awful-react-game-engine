import { Sprite } from 'src/components/Sprite'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    spriteDirection: 'down',
    spriteX: 0,
    spriteY: 0,
  }
}

export const EnemySprite = connect(mapStateToProps)(Sprite);