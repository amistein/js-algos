// Time complexity: O(n + m)

function merge(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  const lower = list1.value < list2.value ? list1 : list2
  const headOrNext = list => list === lower ? list.next : list
  lower.next = merge(headOrNext(list1), headOrNext(list2))
  return lower
}

export default merge
