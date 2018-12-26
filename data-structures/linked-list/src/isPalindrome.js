import reverse from './reverseTailRec'

function isPalindrome(list) {
  function loop(list, reversed) {
    if (!list) return true
    if(list.value !== reversed.value) return false
    return loop(list.next, reversed.next)
  }

  const reversed = reverse(list)

  return loop(list, reversed)
}

export default isPalindrome
