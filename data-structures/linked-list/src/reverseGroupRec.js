import reverse from './reverseTailRecInPlace'

function reverseGroup(list, n) {
  if (!list) return null

  const group = list.take(n)
  const formerHead = group
  const groupReversed = reverse(group)

  formerHead.next = reverseGroup(list.drop(n), n)
  return groupReversed
}

export default reverseGroup
