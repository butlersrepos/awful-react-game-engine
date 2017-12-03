import { Component } from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  onKeyDown: key => dispatch({ type: 'KEYDOWN', key }),
  onKeyUp: key => dispatch({ type: 'KEYUP', key })
})

export default connect(null, mapDispatchToProps)(class extends Component {
  componentDidMount () {
    const { onKeyDown, onKeyUp } = this.props
    window.addEventListener('keydown', event => onKeyDown(event.key))
    window.addEventListener('keyup', event => onKeyUp(event.key))
  }

  render () { return null }
})
