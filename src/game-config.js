export const config = {
  REWIND_LENGTH: 3000,
  RECORD_INTERVAL: 100,
  TICK_DELAY: 50,
  PLAYER_BASE_SPEED: 4,
  SCREEN_WIDTH: 640,
  SCREEN_HEIGHT: 480,
  TILE_WIDTH: 40,
  TILE_HEIGHT: 40
}

if (process.env.NODE_ENV === 'development') {
  window.config = config
}
