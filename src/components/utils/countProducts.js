
export const countProducts = (array) => {
  return array.reduce(function(sum, item) {return sum + item.count}, 0)
}