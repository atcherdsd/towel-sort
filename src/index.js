module.exports = function towelSort (matrix) {
  let arr = [];
  if (arguments.length === 0)
    return []
  else if (matrix.length === 0)
    return []
  else {
    for (let i = 0; i < matrix.length; i++) {
      i % 2 === 0 ? arr.push(matrix[i].sort((a,b) => a - b))
      : arr.push(matrix[i].sort((a, b) => b - a))
    }
    return arr.join(',').split(',');
  }
}