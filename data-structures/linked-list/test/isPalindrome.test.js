import LinkedList from '../src/LinkedList'
import isPalindrome from '../src/isPalindrome'
import isPalindromeRec from '../src/isPalindromeRec'

describe('determine if a linked list is a palindrome by reversing the list and comapring', () => {
  test('returns false if list is not a palindrome', () => {
    const list = LinkedList.fromArray([4,5,6,7,5,4])
    expect(isPalindrome(list)).toEqual(false)
  })

  test('returns true if list is a palindrome', () => {
    const list = LinkedList.fromArray([4,5,6,6,5,4])
    expect(isPalindrome(list)).toEqual(true)
  })
})

describe('determine if a linked list is a palindrome recursively', () => {
  test('returns false if list is not a palindrome', () => {
    const list = LinkedList.fromArray([4,5,6,7,5,4])
    expect(isPalindromeRec(list)).toEqual(false)
  })

  test('returns true if list is a palindrome', () => {
    const list = LinkedList.fromArray([4,5,6,6,5,4])
    expect(isPalindromeRec(list)).toEqual(true)
  })
})
