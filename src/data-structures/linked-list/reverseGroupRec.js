import reverse from './reverseTailRecInPlace'

function reverseGroup(list, n) {
  if (!list) return null

  const next = list.drop(n)
  const formerHead = list
  const group = reverse(list.take(n))

  formerHead.next = reverseGroup(next, n)
  return group
}

export default reverseGroup
