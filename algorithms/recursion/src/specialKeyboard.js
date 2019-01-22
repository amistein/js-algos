/* 
 * Find maximum number of A’s using given four keys.
 * Imagine you have a special keyboard with the following keys: 
 * Key 1:  Prints 'A' on screen
 * Key 2: (Ctrl-A): Select screen
 * Key 3: (Ctrl-C): Copy selection to buffer
 * Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed
 */

// Returns the maximum number of 'A's for a given allowed amount of key presses
function specialKeyboard(n, onScreen = 0, buffer = 0) {
  if (n < 0) return 0
  if (n === 0) return onScreen

  return Math.max(
    specialKeyboard(n - 1, onScreen + 1, buffer),
    specialKeyboard(n - 3, onScreen * 2, onScreen),
    specialKeyboard(n - 1, onScreen + buffer, buffer)
  )
}

// Return the maximum number of 'A's, as well as the optimal key presses
export function specialKeyboardKeys(n, onScreen = 0, buffer = 0, keys = []) {
  if (n < 0) return [0, []]
  if (n === 0) return [onScreen, keys]

  const a = specialKeyboardKeys(n - 1, onScreen + 1, buffer, keys.concat('a'))
  const acv = specialKeyboardKeys(n - 3, onScreen * 2, onScreen, keys.concat(['ctl+a','ctl+c','ctl+v']))
  const v = specialKeyboardKeys(n - 1, onScreen + buffer, buffer, keys.concat('ctl+v'))

  return [a, acv, v].reduce((a, b) => b[0] > a[0] ? b : a , [0])
}

export default specialKeyboard
