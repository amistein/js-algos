export function parenChecker(str) {
  const matches = { '(': ')', '[': ']', '{': '}' }

  function _parenChecker(start, end) {
    const firstIsBracket = Object.keys(matches).includes(str[start])
    const lastIsBracket = Object.values(matches).includes(str[end])
    const firstMatchesLast = matches[str[start]] === str[end]
    
    if (start > end) return true
    if ((end - start === 1) && (firstIsBracket || lastIsBracket)) return false
    if (firstIsBracket && lastIsBracket) 
      if (!firstMatchesLast) return false
      else return _parenChecker(start + 1, end - 1)

    return _parenChecker(firstIsBracket ? start : start + 1, lastIsBracket ? end : end - 1)
  }

  return _parenChecker(0, str.length - 1)
}

export default parenChecker
