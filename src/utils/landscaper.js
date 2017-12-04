import { PREFABS } from 'src/assets/tileset-prefabs'

export const addTree1 = ({ map, row, col }) => {
  if (!map[row][col]) {
    console.warn(`Tried to add a tree1 at ${row}, ${col} but it doesn't exist!`)
    return
  }

  // insert tree into map from base upward
  
  return 
}