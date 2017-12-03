export const config = {
  TICK_DELAY: 50,
  PLAYER_BASE_SPEED: 4,
}

if (process.env.NODE_ENV === 'development') {
  window.config = config
}
