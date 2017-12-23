export const ProbabilityTable = chanceMap => {
  const chances = { ...chanceMap }
  const total = Object.values(chances).reduce((prev, curr) => prev + curr, 0)
  if (total !== 100) { console.warn(`Made a map with aggregated probability of ${total}`) }

  return {
    getResult: mechanism => {
      // check odds == 1.0 total sums of probability
      const roll = mechanism()
      console.log(`roll`, roll)

      let index = 0
      let currentTotal = chances[Object.keys(chances)[index]]
      console.log(`starting total`, currentTotal)

      while (currentTotal < roll) {
        index++
        currentTotal += chances[Object.keys(chances)[index]]
        console.log(`Now rolling total of ${currentTotal} and index ${index}`)
      }

      console.log(`walk ${Object.keys(chances)[index]}`)

      return Object.keys(chances)[index]
    },
    negateChanceOf: negatedResult => {
      console.log(`negating ${negatedResult}`)

      const redistributable = chances[negatedResult]
      if (redistributable === undefined) return

      console.log(`removed an outcome with ${redistributable} chance`)

      delete chances[negatedResult]

      const valueAdd = redistributable / Object.keys(chances).length
      console.log(`re-allocating ${valueAdd} across ${Object.keys(chances).length - 1} other outcomes`)

      for (const possibleResult in chances) {
        chances[possibleResult] = chances[possibleResult] + valueAdd
      }

      console.log(`Rebalanced chances: ${JSON.stringify(chances)}`)

      const total = Object.values(chances).reduce((prev, curr) => prev + curr, 0)
      if (total !== 100) { console.warn(`Rebalanced a map with aggregated probability of ${total}`) }
    }
  }
}