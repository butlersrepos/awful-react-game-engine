import React, { Component } from 'react'
import character from '../../assets/character.png'

const spriteWidth = 64
const spriteHeight = 64

// eslint-disable-next-line
const SpriteMapping = {
  rowLengths: [
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    6,
    6,
    6,
    6,
    13,
    13,
    13,
    13,
    6
  ],
  'walk-up': {
    row: 8,
    colStart: 1,
    colEnd: 8,
    resting: 0
  },
  'walk-left': {
    row: 9,
    colStart: 1,
    colEnd: 8,
    resting: 0
  },
  'walk-down': {
    row: 10,
    colStart: 1,
    colEnd: 8,
    resting: 0
  },
  'walk-right': {
    row: 11,
    colStart: 1,
    colEnd: 8,
    resting: 0
  }
}

class Sprite extends Component {
  constructor(props) {
    super(props)

    const spriteAction = `walk-${this.props.playerDirection}`
    this.state = {
      frame: SpriteMapping[spriteAction].colStart,
      action: spriteAction,
      animationSpeed: 150
    }
  }

  tick = () => {
    const nextFrame = this.state.frame === SpriteMapping[this.state.action].colEnd
      ? SpriteMapping[this.state.action].colStart
      : this.state.frame + 1

    this.setState({
      ...this.state,
      frame: this.props.isMoving ? nextFrame : this.state.frame
    })
  }

  componentDidMount() {
    setInterval(this.tick, this.state.animationSpeed)
  }

  render() {
    const spriteAction = `walk-${this.props.playerDirection}`

    return <div style={{
      background: `url(${character})`,
      height: `${spriteHeight}px`,
      width: `${spriteWidth}px`,
      position: 'absolute',
      left: `${this.props.playerX}px`,
      top: `${this.props.playerY}px`,
      backgroundPositionX: `-${this.state.frame * 64}px`,
      backgroundPositionY: `-${SpriteMapping[spriteAction].row * 64}px`,
      opacity: `${this.props.isGhost ? '0.55' : '1'}`
    }}
    />
  }
}

export default Sprite
