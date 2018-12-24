import LinkedList from './LinkedList'
import intersection from './intersection'
import intersectionHash from './intersectionHash'

describe('find intersection point of two linked lists', () => {
  test('using difference of node counts', () => {
    const list1 = LinkedList.fromArray([19,17,10,12,13,14,15,5])
    const list2 = LinkedList.fromArray([3,9,6])

    // list2 should intersect list1 at `14`
    list2.drop(2).next = list1.drop(5)
    expect(intersection(list1, list2)).toBe(14)
  })

  test('by hashing visted nodes', () => {
    const list1 = LinkedList.fromArray([19,17,10,12,13,14,15,5])
    const list2 = LinkedList.fromArray([3,9,6])

    // list2 should intersect list1 at `14`
    list2.drop(2).next = list1.drop(5)
    expect(intersectionHash(list1, list2)).toBe(14)
  })
})