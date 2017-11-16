export const isMoving = state => {
  return state.controls.W_DOWN ||
    state.controls.A_DOWN ||
    state.controls.S_DOWN ||
    state.controls.D_DOWN
}

export const facing = state => {
  
}