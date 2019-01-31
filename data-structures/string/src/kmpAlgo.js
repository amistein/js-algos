// Time complexity: O(n+m)
// O(n) for `findSubstr` function
// O(m) for `preProcess` function

function preProcess(str) {
  const lps = [0]
  let prefixEnd = 0
  let suffixStart = 1

  while (lps.length < str.length) {
    if (str[prefixEnd] === str[suffixStart]) {
      lps.push(prefixEnd + 1)
      prefixEnd++
      suffixStart++
    } else if (prefixEnd <= 0) {
      lps.push(0)
      prefixEnd = 0
      suffixStart++
    } else {
      prefixEnd = lps[prefixEnd - 1]
    }
  }

  return lps
}

function findSubstr(str, substr) {
  const lps = preProcess(substr)
  let charsMatched = 0

  for (let i = 0; i < str.length; i++) {
    const currSuffixLen = lps[charsMatched - 1]

    if (str[i] === substr[charsMatched]) {
      charsMatched++
    } else if (str[i] === substr[currSuffixLen]) {
      charsMatched = currSuffixLen + 1
    } else charsMatched = 0
    
    if (charsMatched === substr.length) return i - substr.length + 1
  }

  return -1
}

export default findSubstr
