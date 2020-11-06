const { sum } = require('./math')

describe('Сумма:', () => {
  test('1 + 2 должно быть равно 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
