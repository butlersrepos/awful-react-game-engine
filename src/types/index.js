// @flow
export type PlayerDirection = 'up' | 'down' | 'left' | 'right'

export type InitialStateShape = {
  worldWidth: number,
  worldHeight: number,
  tileScale: number,
  playerDirection: PlayerDirection,
  playerX: number,
  playerY: number
}

export type ActionShape = {
  type: string
}