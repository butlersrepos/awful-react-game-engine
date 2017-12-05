import { Component } from 'react'
import { connect } from 'react-redux'

// Hotkeys!
const mapDispatchToProps = dispatch => ({
  onKeyDown: key => dispatch({ type: 'KEYDOWN', key }),
  onKeyUp: key => dispatch({ type: 'KEYUP', key }),
  onKeyPress: key => dispatch({ type: 'KEYPRESS', key }),
  // Maps literal keystrokes to dispatches, i.e. key to game action
  T_UP: () => dispatch({ type: 'RESTORE_STATE' }),
})

export default connect(null, mapDispatchToProps)(class extends Component {
  componentDidMount () {
    const { onKeyDown, onKeyUp, onKeyPress } = this.props

    window.addEventListener('keydown', event => {
      const key = event.key.toUpperCase()

      if (this.props[`${key}_DOWN`]) { this.props[`${key}_DOWN`]() }
      onKeyDown(event.key)
    })

    window.addEventListener('keyup', event => {
      const key = event.key.toUpperCase()

      if (this.props[`${key}_UP`]) { this.props[`${key}_UP`]() }
      onKeyUp(event.key)
    })

    window.addEventListener('keypress', event => {
      const key = event.key.toUpperCase()

      if (this.props[`${key}_PRESS`]) { this.props[`${key}_UP`]() }
      onKeyPress(event.key)
    })
  }

  shouldComponentUpdate () {
    return false
  }

  render () { return null }
})


/**
 * W -> remember W_DOWN -> check hotkeys mapping for W (dispatch event)
 */