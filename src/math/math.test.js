const { sum, multiply } = require('./math')

describe('Сумма:', () => {
  test('Функция sum должна быть объявлена', () => {
    expect(sum).toBeDefined()
  })
  test('1 + 2 должно быть равно 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('Умножение:', () => {
  test('Функция multiply должна быть объявлена', () => {
    expect(multiply).toBeDefined()
  })
  test('2 * 3 должно быть равно 6', () => {
    expect(multiply(2, 3)).toBe(6)
  })
})
