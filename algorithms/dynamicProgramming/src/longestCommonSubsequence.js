import range from '../../../utils/range'

// General recursive solution
function lcs(str1, str2) {
const last = str => str[str.length - 1]
const initial = arr => arr.slice(0, -1)
if (!str1 || !str2) return 0
if (last(str1) === last(str2)) return 1 + lcs(initial(str1), initial(str2))
return Math.max(lcs(initial(str1), str2), lcs(str1, initial(str2)))
}

function lcsDynamic(str1, str2) {
const table = Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0))

for (let row of range(0, str1.length)) {
for (let col of range(0, str2.length)) {
table[row + 1][col + 1] = str1[row] === str2[col] ? 1 + (table[row][col]) :
Math.max(table[row + 1][col], table[row][col + 1])
}
}

return table[str1.length][str2.length]
}

export default lcsDynamic
