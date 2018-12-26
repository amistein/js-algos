// Time complexity: O(n)
function isPalindrome(list) {
  let left = list

  function _isPalindrome(right) {
    if (!right) return true
    if (!_isPalindrome(right.next)) return false
    const leftAndRightMatch = left.value === right.value
    
    left = left.next
    return leftAndRightMatch
  }

  return _isPalindrome(list)
}

export default isPalindrome
