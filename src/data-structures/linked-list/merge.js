function merge(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  const lower = list1.value < list2.value ? list1 : list2
  const lowerOrNext = list => list === lower ? list.next : list
  lower.next = merge(lowerOrNext(list1), lowerOrNext(list2))
  return lower
}

export default merge
