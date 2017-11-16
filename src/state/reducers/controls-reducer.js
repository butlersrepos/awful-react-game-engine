const initialState = {
  W_DOWN: false,
  A_DOWN: false,
  S_DOWN: false,
  D_DOWN: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'KEYDOWN':
      return Object.assign({}, state, {
        [`${action.key.toUpperCase()}_DOWN`]: true
      })
    case 'KEYUP':
      return Object.assign({}, state, {
        [`${action.key.toUpperCase()}_DOWN`]: false
      })
    default:
      return state
  }
}
