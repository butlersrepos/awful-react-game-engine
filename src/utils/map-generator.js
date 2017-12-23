import { PREFABS } from 'src/assets/tileset-prefabs'
import { ProbabilityTable } from 'src/utils/probability-table';

const Movements = {
  up: {
    row: -1,
    col: 0
  },
  down: {
    row: 1,
    col: 0
  },
  left: {
    row: 0,
    col: -1
  },
  right: {
    row: 0,
    col: 1
  }
}

export const generate = (rows, cols) => {
  // goal
  const coverage = 0.30

  let terrainMap = Array(rows).fill('')
  terrainMap = terrainMap.map(() => Array(cols).fill(PREFABS.FULL))

  // start walk somewhere
  const row = Math.floor(Math.random() * rows)
  const col = Math.floor(Math.random() * cols)
  let lastMove = null
  let currentWalkRow = row
  let currentWalkCol = col

  for (let i = 0; i < 400; i++) {
    lastMove = drunkenWalk(terrainMap, currentWalkRow, currentWalkCol, lastMove)
    currentWalkRow += Movements[lastMove].row
    currentWalkCol += Movements[lastMove].col
  }

  return terrainMap
}

const buildDrunkenProbabilities = lastMove => {
  const otherChoices = lastMove ? 3 : 4
  const drunkTendency = lastMove ? 80 : 0
  const elseTendency = (100 - drunkTendency) / (otherChoices)

  const moves = {
    up: Number(elseTendency),
    down: Number(elseTendency),
    left: Number(elseTendency),
    right: Number(elseTendency),
  }

  if (lastMove) { moves[lastMove] = drunkTendency }

  console.log(`moves, ${JSON.stringify(moves)}`)
  return ProbabilityTable(moves)
}

const drunkenWalk = (terrainMap, row, col, lastMove) => {
  console.log(`\tNEW DRUNKEN WALK`)

  const moveProbabilities = buildDrunkenProbabilities(lastMove)
  if (row === 0) moveProbabilities.negateChanceOf('up')
  if (row === terrainMap.length - 1) moveProbabilities.negateChanceOf('down')
  if (col === 0) moveProbabilities.negateChanceOf('left')
  if (col === terrainMap[0].length - 1) moveProbabilities.negateChanceOf('right')

  const result = moveProbabilities.getResult(() => Math.random() * 100)
  const targetRow = row + Movements[result].row
  const targetCol = col + Movements[result].col

  terrainMap[targetRow][targetCol] = PREFABS.CENTER
  return result
}