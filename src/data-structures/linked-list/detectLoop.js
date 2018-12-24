function detectLoop(list) {
  if (!list) return false
  if (list.visited) return true
  list.visited = true
  return detectLoop(list.next)
}

export default detectLoop
