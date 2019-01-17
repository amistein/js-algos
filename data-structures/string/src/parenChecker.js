function parenChecker(str) {
  const matches = { '(': ')', '[': ']', '{': '}' }
  const stack = []

  for (let c of str) {
    if (Object.keys(matches).includes(c)) stack.push(c)
    if (Object.values(matches).includes(c)) 
      if (c !== matches[stack.pop()]) return false
  }

  if (stack.length) return false
  return true
}

export default parenChecker
