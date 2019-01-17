function permutations(str) {
	function permute(c, pre, post, acc) {
		if (!post) return [pre + c]
		return permute(c, pre + post[0], post.slice(1)).concat(pre + c + post)
	}
	
	if (str.length === 1) return [str]
	const next = permutations(str.slice(1))
	const flatten = arr => arr.reduce((a, b) => a.concat(b))

	return flatten(next.map(p => permute(str[0], '', p)))
}

export default permutations
