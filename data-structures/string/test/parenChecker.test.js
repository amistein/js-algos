import parenChecker from '../src/parenChecker'
import parenCheckerRec from '../src/parenCheckerRec'

describe('check if parentheses in string are balanced', () => {
  test('returns false if parentheses are not balanced', () => {
    expect(parenChecker('jkj([(dj)fj]frt')).toBe(false)
  })

  test('returns true if parentheses are balanced', () => {
    expect(parenChecker('jkj([(dj)fj]f)rt')).toBe(true)
  })

  test('recursive approach returns false if parentheses are not balanced', () => {
    expect(parenCheckerRec('jkj([(dj)fj]frt')).toBe(false)
  })

  test('recursive approach returns true if parentheses are balanced', () => {
    expect(parenCheckerRec('jkj([(dj)fj]f)rt')).toBe(true)
  })
})
