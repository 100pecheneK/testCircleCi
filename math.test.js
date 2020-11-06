const { sum, diff, div } = require('./math')

describe('Сумма:', () => {
  test('1 + 2 должно быть равно 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('Разница:', () => {
  test('2 - 1 должно быть равно 1', () => {
    expect(diff(2, 1)).toBe(1)
  })
})

describe('Разница:', () => {
  test('4 / 2 должно быть равно 1', () => {
    expect(div(4, 2)).toBe(2)
  })
})
