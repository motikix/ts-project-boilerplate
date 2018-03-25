import { add, sub, multi, div } from '../src/calc'

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('2 - 1 = 1', () => {
  expect(sub(2, 1)).toBe(1)
})

test('3 * 3 = 9', () => {
  expect(multi(3, 3)).toBe(9)
})

test('10 / 2 = 5', () => {
  expect(div(10, 2)).toBe(5)
})

test('10 / 0 = 0???', () => {
  expect(div(10, 0)).toBe(0)
})
