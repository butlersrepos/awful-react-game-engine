import { ProbabilityTable } from './probability-table'
describe('Probability Tables', function () {

  describe('get result', function () {
    const table = ProbabilityTable({
      x: 34,
      y: 33,
      z: 33
    })

    it('should work', function () {
      expect(table.getResult(() => 1)).toEqual('x')
      expect(table.getResult(() => 34)).toEqual('x')
      expect(table.getResult(() => 35)).toEqual('y')
      expect(table.getResult(() => 100)).toEqual('z')
    })
  })
})
