function removeDupes(str, charToCheck = '') {
  if (!str) return ''

  const head = str[0]
  const next = removeDupes(str.slice(1), head)
  if (head === charToCheck || head === str[1]) return next
  return head + next
}

// Tail recursive solution
function removeDupesTailRec(str, charToCheck = '', index = 0, result = '') {
  if (index === str.length) return result

  const head = str[index]
  const addToResult = charToCheck === head || head === str[index + 1] ? '' : head
  return removeDupesTailRec(str, head, index + 1, result + addToResult)
}


export default removeDupes
