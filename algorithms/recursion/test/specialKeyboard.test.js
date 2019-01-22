import specialKeyboard, { specialKeyboardKeys } from '../src/specialKeyboard'

describe('Find maximum number of A’s using given four keys', () => {
	test('`specialKeyboard` returns maximum number of "A"s', () => {
		expect(specialKeyboard(3)).toBe(3)
		expect(specialKeyboard(7)).toBe(9)
		expect(specialKeyboard(9)).toBe(16)
	})

	test('`specialKeyboardKeys` returns the maximum number of "A"s, as well as the optimal key presses', () => {
		expect(specialKeyboardKeys(3)).toEqual([ 3, [ 'a', 'a', 'a' ] ])
		expect(specialKeyboardKeys(7)).toEqual([ 9, [ 'a', 'a', 'a', 'ctl+a', 'ctl+c', 'ctl+v', 'ctl+v' ] ])
		expect(specialKeyboardKeys(9)).toEqual([ 16,
			[ 'a', 'a', 'a', 'a', 'ctl+a', 'ctl+c', 'ctl+v', 'ctl+v', 'ctl+v' ] ])		
	})
})
